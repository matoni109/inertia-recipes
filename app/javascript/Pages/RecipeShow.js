import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
// import { recipes } from "~/api/all";
// import SearchFilter from "~/Components/SearchFilters";
import AvatarCloudinary from "~/Components/AvatarCloudinary";
import FavoritedRecipe from "~/Components/FavoriteRecipe";

const Recipe = (props) => {
  const {
    data: { user, avatar },
    recipe,
    recipe_owner,
    recipe_owner_avatar,
    is_favorite,
  } = props;
  const { errors } = usePage().props;

  const [favState, setFavState] = useState(is_favorite);
  const [commentState, setCommentState] = useState(false);
  // console.log(props);
  // console.log(is_favorite);
  const deleteHandler = () => {
    // console.log(`/recipes/${recipe.id}`);
    // Inertia.delete(`/recipes/${recipe.id}`);
    // Inertia.visit(`/recipes/${recipe.id}`, { method: "delete" });
    Inertia.delete(`/recipes/${recipe.id}`, {
      onBefore: () => confirm("Are you sure you want to delete this user?"),
    });
  };

  const favoriteHandler = () => {
    // setFavState(is_favorite);
    // console.log(favState);
    setFavState((prevCheck) => !prevCheck);
  };

  const commentHandler = () => {
    // setFavState(is_favorite);
    // console.log(favState);
    setCommentState((prevCheck) => !prevCheck);
  };

  return (
    <>
      {/* <SearchFilter /> */}
      <section className="text-indigo-200 body-font p-5 bg-gray-900">
        <div className="mx-auto flex px-5  md:flex-row flex-col items-center jobcard">
          <div className="mx-auto lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <figure className="visible">
              <div className="">
                <div className="pt-10 px-2 sm:px-2">
                  {/* <span className="inline-block py-1 px-2 rounded-full bg-green-600 text-white  text-xs font-bold tracking-widest mb-2">
                    Featured Courses
                  </span> */}
                  {favState && <FavoritedRecipe />}

                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
                    {recipe.name}
                  </h1>
                  <p className="text-indigo-200 text-gray-100 pb-6">
                    {recipe.description}
                  </p>
                  <p className="max-w-prose text-gray-100 pb-8">
                    We can't believe how far we have come in the last 6 months.
                    I really did not think this awesome career move would come
                    so quickly. Thanks to each of you put into SI and the
                    partner relationships.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center pb-12">
                      <div className="h-12 w-12">
                        {/* <img
                          src="https://res.cloudinary.com/oeelsafe/image/upload/cag5oirgzrugrw647ls4fb4k30gf.jpeg"
                          className="h-full w-full object-cover overflow-hidden rounded-full"
                        /> */}
                        <AvatarCloudinary userData={recipe_owner_avatar} />
                      </div>
                      <p className="text-gray-100 font-bold ml-3">
                        {recipe_owner.name}
                        <br />
                        <span className="text-indigo-200 text-base font-light">
                          {recipe_owner.email}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div>
                      <InertiaLink href={`/recipes/${recipe.id}/edit`}>
                        <button className="h-10 mb-3 px-5 mr-3 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
                          Edit
                        </button>
                      </InertiaLink>
                    </div>
                    <div>
                      <button
                        onClick={deleteHandler}
                        className="h-10 mr-3 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                      >
                        Delete
                      </button>
                    </div>
                    <div>
                      <InertiaLink
                        className="h-10 mr-3 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                        preserveScroll
                        href={
                          favState ? `/favorites/${recipe.id}` : "/favorites"
                        }
                        method={favState ? "delete" : "post"}
                        as="button"
                        type="button"
                        onClick={favoriteHandler}
                        data={{
                          favoritable_type: "Recipe",
                          favoritable_id: recipe.id,
                        }}
                      >
                        {favState ? "Favorited" : "Favorite"}
                      </InertiaLink>
                    </div>
                    <div>
                      <button
                        onClick={commentHandler}
                        className="h-10 mr-3 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100"
                      >
                        {commentState ? "Comments Show" : "Comments Off"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipe;
