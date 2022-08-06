import Text from "./Text";
import A from "./A";
export default function Footer() {
  return (
    <>
      <Text tag="p">
        This website is open-source on{" "}
        <A
          href="https://github.com/Lolly1150/my-website"
          className="github-text"
        >
          Github
        </A>
      </Text>
    </>
  );
}
