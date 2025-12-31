type DividerWithTextProps = {
  text: string;
};

export default function DividerWithText({ text }: DividerWithTextProps) {
  return (
    <div className="relative flex items-center text-xs uppercase py-6">
      <div className="grow border-t border-(--border-color)"></div>
      <span className="bg-(--bg-primary) px-2 text-(--text-secondary)">{text}</span>
      <div className="grow border-t border-(--border-color)"></div>
    </div>
  );
}
