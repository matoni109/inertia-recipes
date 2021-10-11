import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import Comment from "~/Components/Comments/Comment";

const MyComment = ({
  comment,
  allComments,
  user_info,
  avatar_info,
  post_id,
}) => {
  // console.log(comment);
  const childComments = () =>
    allComments.filter((c) => c.comment.parent_id === comment.id);
  // console.log(childComments());
  return (
    <Comment
      key={comment.id}
      content={comment.body}
      parent_id={comment.parent_id}
      id={comment.id}
      user={user_info}
      avatar={avatar_info}
    >
      {/* lg:block lg:mr-3 */}
      <div className="replies ml-3 mr-2 sm:ml-9 md:mr-3">
        {childComments().map((c) => (
          <MyComment
            key={c.comment.id}
            comment={c.comment}
            allComments={allComments}
            // user_id={user_id}
            post_id={post_id}
            parent_id={c.comment.id}
            user_info={c.user}
            avatar_info={c.avatar}
          />
        ))}
      </div>
    </Comment>
  );
};

export default MyComment;
