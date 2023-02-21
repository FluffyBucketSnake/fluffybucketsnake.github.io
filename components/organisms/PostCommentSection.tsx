import Button from "components/atoms/Button";
import { DiscussionEmbed } from "disqus-react";
import { DISQUS_SHORTNAME } from "lib/constants/disqus";
import { PostData } from "lib/types/PostData";
import { FC, useState } from "react";

export type Props = {
  post: PostData;
};

const PostCommentSection: FC<Props> = ({ post }) => {
  const [shouldShowComments, toggleComments] = useState<boolean>(false);

  const showComments = () => toggleComments(true);

  return (
    <section>
      {shouldShowComments ? (
        <DiscussionEmbed
          shortname={DISQUS_SHORTNAME}
          config={{ url: post.meta.url, identifier: post.meta.slug }}
        />
      ) : (
        <Button className="w-full" size="lg" onClick={showComments}>
          See comment section
        </Button>
      )}
    </section>
  );
};
export default PostCommentSection;
