// src/pages/dashboard_pages/ImportMarkdownPage.jsx
import React, { useEffect } from "react";
import BlogSidebarComponent from "../../components/blog_components/blog_dashboard/BlogSidebarComponent";
import ImportMarkdownPost from "../../components/blog_components/blog_dashboard/blog_post/ImportMarkdownPost";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUser } from "../../app/features/user/userSlice";

const ImportMarkdownPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo, isLoading, isAuthor, isAdmin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    // Eğer kullanıcı bilgisi yoksa al
    if (!userInfo && !isLoading) {
      dispatch(fetchUser());
    }
  }, [dispatch, userInfo, isLoading]);

  // Yükleme durumunda loading göster
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <span className="ml-3">Yükleniyor...</span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full">
      <BlogSidebarComponent />

      {/* İçerik Alanı */}
      <div className="flex-1 p-4 md:p-6 flex flex-col gap-4 md:gap-6 overflow-x-auto">
        <div className="w-full">
          <ImportMarkdownPost />
        </div>
      </div>
    </div>
  );
};

export default ImportMarkdownPage;
