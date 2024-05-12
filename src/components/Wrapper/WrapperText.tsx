interface Props {
  children: JSX.Element;
}
const WrapperText = (props: Props) => {
  return (
    <section className="global-text-content-wrapper">{props.children}</section>
  );
};

export default WrapperText;
