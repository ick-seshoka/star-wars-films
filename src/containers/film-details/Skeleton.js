import React, { memo } from "react";

import {
  DetailsWrap,
  InfoSkeleton,
  SkeletonWrap,
  TextSkeleton,
  TitleSkeleton,
  SkeletonTheme,
} from "./styles";

const Skeleton = memo(() => (
  <SkeletonTheme>
    <DetailsWrap>
      <TitleSkeleton />
      <InfoSkeleton />
      <SkeletonWrap>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </SkeletonWrap>
      <SkeletonWrap>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </SkeletonWrap>
      <SkeletonWrap>
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
        <TextSkeleton />
      </SkeletonWrap>
      <InfoSkeleton />
    </DetailsWrap>
  </SkeletonTheme>
));

export default Skeleton;
