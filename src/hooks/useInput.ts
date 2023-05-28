import { ChangeEvent, useCallback, useState } from "react";

interface UseInputProp {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (prop?: ChangeEvent<HTMLInputElement>): UseInputProp => {
  const [value, setValue] = useState("");
  const onChange = useCallback((prop: ChangeEvent<HTMLInputElement>) => {
    setValue(prop.target.value);
  }, []);

  return {
    value,
    onChange,
  };
};
