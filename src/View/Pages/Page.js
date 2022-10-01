import { Routes, Route } from "react-router";
import { useRecoilState } from "recoil";
// import { StoryState } from "../../Model/Story";
import { Loading } from "../Components/Loading";
import { PageFlippers } from "../Components/PageFlipButton";
import { StoryCard } from "../Components/StoryCard";
import { StoryImage } from "../Components/StoryImage";
import { StoryOptionForm } from "../Components/StoryOptions";
import { StoryTexts } from "../Components/StoryText";
import { PageHeader } from "./Header";
import * as S from "./Page.styled";

const Page = () => {
  return (
    <S.Container>
      <PageHeader />
      <Routes>
        {/* <Route index element={<LoadingPage />} /> */}
        <Route index element={<StoryPage />} />
        <Route path="quiz" element={<QuizPage />} />
      </Routes>
    </S.Container>
  );
};

const LoadingPage = () => {
  return (
    <S.ContainerLoading>
      <Loading />
    </S.ContainerLoading>
  );
};

const QuizPage = () => {
  return (
    <S.ContainerQuiz>
      <StoryCard />
      <StoryOptionForm />
      <PageFlippers />
    </S.ContainerQuiz>
  );
};

const StoryPage = () => {
  // const [story, setStory] = useRecoilState(StoryState);

  return (
    <S.ContainerStory>
      <StoryImage />
      <StoryTexts />
      <PageFlippers />
    </S.ContainerStory>
  );
};

export default Page;
