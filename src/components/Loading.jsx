const Loading = () => {
  return (
    <section className="padding dark:bg-gray-800">
      <div className="max-w-6xl mx-auto flex justify-center items-center h-screen">
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full h-8 w-8 border-2 border-t-yellow-500 border-b-red-500 border-l-purple-500 border-r-green-500"></div>
        </div>
      </div>
    </section>
  );
};
export default Loading;
