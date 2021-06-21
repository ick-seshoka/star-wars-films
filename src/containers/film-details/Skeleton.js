import React, { memo } from "react";

import { isMobile } from "@helpers";

import {
  DetailsWrap,
  InfoSkeleton,
  SkeletonWrap,
  TextSkeleton,
  TitleSkeleton,
  SkeletonTheme,
} from "./styles";

const Skeleton = memo(() => {
  const onMobile = isMobile();

  return (
    <SkeletonTheme>
      <DetailsWrap>
        <TitleSkeleton isMobile={onMobile} />
        <InfoSkeleton isMobile={onMobile} />
        <SkeletonWrap>
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
        </SkeletonWrap>
        <SkeletonWrap>
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
        </SkeletonWrap>
        <SkeletonWrap>
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
          <TextSkeleton isMobile={onMobile} />
        </SkeletonWrap>
        <InfoSkeleton isMobile={onMobile} />
      </DetailsWrap>
    </SkeletonTheme>
  );
});

export default Skeleton;
