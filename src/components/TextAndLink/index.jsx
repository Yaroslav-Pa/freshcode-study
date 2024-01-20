function TextAndLink({ linkUrl, text, topic }) {
  return (
    <div>
      <h1>{topic}</h1>
      <p>{text}</p>
      <a href={linkUrl}>Learn more {'>'}</a>
    </div>
  );
}

export default TextAndLink;
