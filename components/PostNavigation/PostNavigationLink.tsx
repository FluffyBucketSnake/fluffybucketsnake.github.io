import clsx from "clsx";
import { PostMetadata } from "lib/types/PostMetadata";
import Link from "next/link";
import React, { FC } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export type PostNavigationLinkProps = {
  label: string;
  post: PostMetadata | undefined;
  side: "left" | "right";
};

const PostNavigationLink: FC<PostNavigationLinkProps> = ({
  label,
  post,
  side,
}) => {
  const classesForSide = useClassesForSide(side);
  const rootClasses = clsx(
    "grid grid-rows-2 gap-1 justify-self-start",
    classesForSide.root
  );

  const content = (
    <>
      {side === "left" && (
        <MdChevronLeft
          className="justify-self-center self-center row-span-2"
          size="4rem"
        />
      )}
      {side === "right" && (
        <MdChevronRight
          className="justify-self-center self-center col-start-2 row-start-1 row-span-2"
          size="4rem"
        />
      )}
      <span
        className={clsx(
          "text-xl font-bold text-text-secondary",
          classesForSide.label
        )}
      >
        {label}
      </span>
      <strong
        className={clsx(
          "text-2xl font-normal",
          post && "text-secondary-400 underline",
          classesForSide.name
        )}
      >
        {post?.title ?? "None"}
      </strong>
    </>
  );

  if (post == null) {
    return <div className={rootClasses}>{content}</div>;
  }

  return (
    <Link href={post.url} passHref>
      <a className={rootClasses}>{content}</a>
    </Link>
  );
};

export default PostNavigationLink;

function useClassesForSide(side: "left" | "right") {
  switch (side) {
    case "left":
      return {
        root: "grid-cols-[min-content_1fr]",
        label: "text-left",
        name: "text-left",
      };
    case "right":
      return {
        root: "grid-cols-[1fr_min-content]",
        label: "text-right",
        name: "text-right",
      };
  }
}
