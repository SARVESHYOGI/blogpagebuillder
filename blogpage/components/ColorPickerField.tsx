type ColorPickerProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
};

export const ColorPickerField = ({
  label,
  value,
  onChange,
}: ColorPickerProps) => {
  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: 4,
          fontWeight: "bold",
        }}
      >
        {label}
      </label>

      <div className="w-full h-5 border rounded overflow-hidden border-none">
        <input
          type="color"
          value={value ?? "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-full cursor-pointer border-none p-0"
        />
      </div>
    </div>
  );
};
