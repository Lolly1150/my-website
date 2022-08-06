import Text from "./Text";
import A from "./A";
export default function Footer() {
  return (
    <>
      <Text tag="p">
        This website is open-source on{" "}
        <A href="/" className="github-text">
          Github
        </A>
      </Text>
    </>
  );
}
