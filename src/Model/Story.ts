import { atom } from "recoil";

// // const

export const STORYPAGE = "storypage";
export const QUIZPAGE = "quizepage";
export const OPTIONPAGE = "optionpage";
export const LOADINGPAGE = "loadingpage";

type NextActionType = {
  PageType: String;
};

const NextActionDefault: NextActionType = {
  PageType: QUIZPAGE,
};

type StoryResponse = {};

// const MockStory = [];
// export const StoryState = atom({
//   key: "StoryAtom",
//   default: MockStory,
// });
// const MockStoryPart = {
//   pageType: STORYPAGE,
//   pageText: "",
//   pageImage: "",
//   pageOption: [],
//   pageCount: 0,
// };

export const StoryState = atom({
  key: "StoryStateAtom",
  default: {},
});

export const NextActionState = atom({
  key: "NextActionAtom",
  default: NextActionDefault,
});

const CurrentStory = {
  id: 1,
  idPart: 0,
  text: "",
  nextOptions: [],
};
