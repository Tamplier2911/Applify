/*

const cardMotionsForFramer = {
  201: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
    },
    hidden: { opacity: 0, x: -500 },
  },
  202: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
    },
    hidden: { opacity: 0, y: -300 },
  },
  203: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
    },
    hidden: { opacity: 0, y: 500 },
  },
  204: {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1.2, delay: 0.1, type: "spring", stiffness: 20 },
    },
    hidden: { opacity: 0, x: 500 },
  },
};

*/

/* 

<CardContainer
  val={id}
  cl={{ left: gradient[0], right: gradient[1] }}
  initial="hidden"
  animate="visible"
  variants={cardMotions[id]}
></CardContainer>;  

*/

/*

import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  	background: white;
  	border-radius: 30px;
  	width: 150px;
  	height: 150px;
`;

export const Example = () => <Box animate={{ scale: 2 }} />;

*/

/*

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledComponent = styled(motion.div)`
	width: 160px;
	height: 160px;
	background-color: skyblue;
	border-radius: 8px;
	box-shadow: 0 16px 32px -16px black;
`;

const App = () => {
	return <StyledComponent 
			    drag
			    dragConstraints={{ left: -32, right: 32, top: -32, bottom: 32 }}
	        />
}

*/
