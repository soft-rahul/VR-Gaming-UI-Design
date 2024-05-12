interface Props {
  children: JSX.Element;
}

const Wrapper = (props: Props) => {
  return <main className="global-content-wrapper">{props.children}</main>;
};

export default Wrapper;
