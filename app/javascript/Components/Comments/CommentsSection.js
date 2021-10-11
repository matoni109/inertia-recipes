import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
// import { recipes } from "~/api/all";
// import SearchFilter from "~/Components/SearchFilters";
import AvatarCloudinary from "~/Components/AvatarCloudinary";
import FavoritedRecipe from "~/Components/FavoriteRecipe";
import AddComment from "~/Components/Comments/AddComment";
import Comment from "~/Components/Comments/Comment";
import MyComment from "~/Components/Comments/MyComment";
// https://www.digitalocean.com/community/conceptual_articles/react-loading-components-dynamically-hooks

const CommentsSection = (props) => {
  console.log(props);
  const {
    data: { user, avatar },
    recipe,
    recipe_owner,
    recipe_owner_avatar,
    is_favorite,
    allComments,
  } = props.props;
  const { errors } = usePage().props;

  const getParentNodes = (allComments) => {
    const parentNodes = allComments.filter((c) => c.parent_id === null);
    return parentNodes;
  };

  // console.log(getParentNodes(allComments));

  return (
    <div className="container mx-auto px-4">
      <h3 className="p-4 font-semibold leading-10">Comments:: </h3>
      {getParentNodes(allComments).map((c, index) => (
        <div key={index} className="hover:bg-gray-100 m-1 p-2 pt-2">
          <MyComment
            key={index}
            comment={c}
            allComments={allComments}
            createComment={"createComment"}
            user_id={user.id}
            user_name={user.name}
            post_id={recipe.id}
            parent_id={c.id}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
