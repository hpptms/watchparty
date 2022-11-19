import { FC } from "react";
import { css } from "@emotion/react";

type data = {
  data:{
    url:string
  }
}

export const HederIconBase: FC<data> = ({ data }) => {
  const { url } = data;
  return <img src={url} css={SImgfit} />;
};

const SImgfit = css({
  maxWidth: "30px",
  margin: "0 auto",
  padding: "0px"
});
