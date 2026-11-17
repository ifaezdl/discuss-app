const paths = {
  home() {
    return "/";
  },
  topicsShow(topicsSlug: string) {
    return `/topics/${topicsSlug}`;
  },
  postCreate(topicsSlug: string) {
    return `/topics/${topicsSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};
export default paths;
