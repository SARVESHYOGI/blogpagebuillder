import type { Config } from "@measured/puck";

type Props = {
  HeadingBlock: { title: string; twClasses: string };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: { type: "text" },
        twClasses: { type: "text" }, // Add simple text field to play with Tailind
      },
      defaultProps: {
        title: "Heading",
        twClasses: "",
      },
      render: ({ title, twClasses }) => (
        <div className={twClasses}>
          <h1>{title}</h1>
        </div>
      ),
    },
  },
};

export default config;
