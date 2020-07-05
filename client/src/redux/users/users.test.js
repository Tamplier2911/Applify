// reducer
import usersReducer from "./users.reducer";

// sagas
import { loadAllUsers } from "./users.sagas";
import { runSaga } from "redux-saga";
import api from "./users.api";

// actions
import {
  loadAllUsersStart,
  loadAllUsersSucess,
  loadAllUsersFailure,
  createOneUserStart,
  createOneUserSuccess,
  createOneUserFailure,
  updateOneUserStart,
  updateOneUserSuccess,
  updateOneUserFailure,
  deleteOneUserStart,
  deleteOneUserSuccess,
  deleteOneUserFailure,
  cleanUpUsersFromState,
} from "./users.actions";

// types
import usersTypes from "./users.types";

const {
  LOAD_ALL_USERS_START,
  LOAD_ALL_USERS_SUCCESS,
  LOAD_ALL_USERS_FAILURE,
  CREATE_ONE_USER_START,
  CREATE_ONE_USER_SUCCESS,
  CREATE_ONE_USER_FAILURE,
  UPDATE_ONE_USER_START,
  UPDATE_ONE_USER_SUCCESS,
  UPDATE_ONE_USER_FAILURE,
  DELETE_ONE_USER_START,
  DELETE_ONE_USER_SUCCESS,
  DELETE_ONE_USER_FAILURE,
  CLEAN_UP_USERS_FROM_STATE,
} = usersTypes;

let defaultState = {
  allUsers: [],
  isLoading: false,
  errorMessage: null,
};

describe("users.actions", () => {
  describe("loadAllUsers", () => {
    it("returns action object with expected type", () => {
      const actionObject = loadAllUsersStart();
      expect(actionObject.type).toBe(LOAD_ALL_USERS_START);
    });

    it("returns action object with expected type and expected payload", () => {
      const users = [{ name: "User", uid: "SDK3219" }];
      const actionObject = loadAllUsersSucess(users);
      expect(actionObject.type).toBe(LOAD_ALL_USERS_SUCCESS);
      expect(actionObject.payload).toEqual(users);
    });

    it("returns action object with expected type and expected payload", () => {
      const error = "err";
      const actionObject = loadAllUsersFailure(error);
      expect(actionObject.type).toBe(LOAD_ALL_USERS_FAILURE);
      expect(actionObject.payload).toEqual(error);
    });
  });

  describe("createOneUser", () => {
    it("returns action object with expected type", () => {
      const userCredentials = { name: "User", password: "1234" };
      const actionObject = createOneUserStart(userCredentials);
      expect(actionObject.type).toEqual(CREATE_ONE_USER_START);
      expect(actionObject.payload).toEqual(userCredentials);
    });

    it("returns action object with expected type and expected payload", () => {
      const actionObject = createOneUserSuccess();
      expect(actionObject.type).toBe(CREATE_ONE_USER_SUCCESS);
    });

    it("returns action object with expected type and expected payload", () => {
      const error = "err";
      const actionObject = createOneUserFailure(error);
      expect(actionObject.type).toBe(CREATE_ONE_USER_FAILURE);
      expect(actionObject.payload).toEqual(error);
    });
  });

  describe("updateOneUser", () => {
    it("returns action object with expected type", () => {
      const updateData = { name: "Updated", password: "321" };
      const actionObject = updateOneUserStart(updateData);
      expect(actionObject.type).toBe(UPDATE_ONE_USER_START);
      expect(actionObject.payload).toEqual(updateData);
    });

    it("returns action object with expected type and expected payload", () => {
      const actionObject = updateOneUserSuccess();
      expect(actionObject.type).toBe(UPDATE_ONE_USER_SUCCESS);
    });

    it("returns action object with expected type and expected payload", () => {
      const error = "err";
      const actionObject = updateOneUserFailure(error);
      expect(actionObject.type).toBe(UPDATE_ONE_USER_FAILURE);
      expect(actionObject.payload).toEqual(error);
    });
  });

  describe("deleteOneUser", () => {
    it("returns action object with expected type", () => {
      const id = "22";
      const actionObject = deleteOneUserStart(id);
      expect(actionObject.type).toBe(DELETE_ONE_USER_START);
      expect(actionObject.payload).toEqual(id);
    });

    it("returns action object with expected type and expected payload", () => {
      const actionObject = deleteOneUserSuccess();
      expect(actionObject.type).toBe(DELETE_ONE_USER_SUCCESS);
    });

    it("returns action object with expected type and expected payload", () => {
      const error = "err";
      const actionObject = deleteOneUserFailure(error);
      expect(actionObject.type).toBe(DELETE_ONE_USER_FAILURE);
      expect(actionObject.payload).toEqual(error);
    });
  });

  describe("cleanUpUsersFromState", () => {
    it("returns action object with expected type", () => {
      const actionObject = cleanUpUsersFromState();
      expect(actionObject.type).toBe(CLEAN_UP_USERS_FROM_STATE);
    });
  });
});

describe("users.reducer", () => {
  it("returns default state if no action type matched", () => {
    const state = usersReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  describe("loadAllUsersSuccess", () => {
    it("loads array of users to the state", () => {
      const users = [{ name: "User", uid: "SDK2321" }];
      const state = usersReducer(defaultState, loadAllUsersSucess(users));
      expect(state.allUsers.length).toBe(1);
    });
  });

  describe("loadAllUsersFailure", () => {
    it("loads error to the state", () => {
      const error = "err!";
      const state = usersReducer(defaultState, loadAllUsersFailure(error));
      expect(state.errorMessage).toEqual(error);
    });
  });

  describe("createOneUserFailure", () => {
    it("loads error to the state", () => {
      const error = "err!";
      const state = usersReducer(defaultState, createOneUserFailure(error));
      expect(state.errorMessage).toEqual(error);
    });
  });

  describe("updateOneUserFailure", () => {
    it("loads error to the state", () => {
      const error = "err!";
      const state = usersReducer(defaultState, updateOneUserFailure(error));
      expect(state.errorMessage).toEqual(error);
    });
  });

  describe("deleteOneUserFailure", () => {
    it("loads error to the state", () => {
      const error = "err!";
      const state = usersReducer(defaultState, deleteOneUserFailure(error));
      expect(state.errorMessage).toEqual(error);
    });
  });

  describe("cleanUpUsersFromState", () => {
    it("cleans up state from user objects", () => {
      defaultState = {
        allUsers: [{ name: "User", uid: "SDK12312" }],
        isLoading: false,
        errorMessage: null,
      };
      const state = usersReducer(defaultState, cleanUpUsersFromState());
      expect(state.allUsers.length).toBe(0);
    });
  });
});

describe("users.sagas", () => {
  describe("saga - loadAllUsers", () => {
    it("runs expected sagas", async () => {
      const dummyUsers = [
        { id: "1", name: "Thomas", email: "ex@mple.com" },
        { id: "2", name: "Donna", email: "ex@mple.com" },
        { id: "3", name: "Rayan", email: "ex@mple.com" },
      ];

      const fetchAllUsers = jest
        .spyOn(api, "fetchAllUsers")
        .mockImplementation(() => Promise.resolve(dummyUsers));

      const dispatched = [];
      const result = await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        loadAllUsers
      );

      // console.log(dispatched);
      // expect(fetchAllUsers).toHaveBeenCalledTimes(1);
      // expect(dispatched).toEqual([]);
      // fetchAllUsers.mockClear();
    });
  });
});
