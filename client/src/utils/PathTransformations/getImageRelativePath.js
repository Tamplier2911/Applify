// INSPIRED BY BUGS VIA URL PATH FIELDS
// ISSUES IS /profile/ find way to rid of profile
//                                    \/      \/
// https://applify-s.herokuapp.com/profile/messages/api/uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg
// required href - https://applify-s.herokuapp.com/api/...

const getImageRelativePath = path => {
  // pre path
  // http://localhost:3000/
  let locationHref = window.location.href.split("/");
  locationHref = "".concat(locationHref[0], "//", locationHref[2], "/");

  // image path
  // if path  => uploads/images/users/user-123.jpeg
  // else     => uploads/images/users/default.jpg
  let photo = "";
  if (path) {
    photo = path;
  } else {
    photo = "uploads/images/users/default.jpg";
  }

  // full path
  let image = `${locationHref + "api/" + photo}`;
  return image;
};

export default getImageRelativePath;
