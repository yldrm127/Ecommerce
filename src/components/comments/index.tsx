function index() {
  const comments = [
    {
      id: 1,
      username: "hamza yıldırım",
      comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sem eget sem dapibus aliquet. Ut tincidunt ipsum id urna cursus, in  ",
    },
    {
      id: 2,
      username: "ali yıldırım",
      comment:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et sem eget sem dapibus aliquet. Ut tincidunt ipsum id urna cursus, in  ",
    },
  ];
  return (
    <div>
      <span>Yorumlar</span>
      <div>
        {comments.map((index) => (
          <div className=" m-5 ">
            <span>{index.username} </span>
            <p className="text-sm">{index.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
