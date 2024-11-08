"use client";

import React, {
  FormEvent,
  startTransition,
  useActionState,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface IProps {
  className?: string;
  onSubmit: (state: unknown, formData: FormData) => Promise<void>;
}

export interface IFormContext {
  formData?: FormData;
}

export const FormContext = React.createContext<IFormContext>({
  formData: new FormData(),
});

const Form: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  onSubmit,
  className,
}) => {
  const [formData, setFormData] = useState<FormData>();
  const ref = useRef<HTMLFormElement>(null);
  const [_, submitAction] = useActionState(onSubmit, undefined);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      startTransition(() => submitAction(formData));
    },
    [submitAction]
  );

  const handleUpdate: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    setFormData(new FormData(e.currentTarget))
  };

  useEffect(() => {
    setFormData(new FormData(ref.current!))
  }, [])

  return (
    <form
      ref={ref}
      className={className}
      onSubmit={handleSubmit}
      autoComplete="off"
      onChange={handleUpdate}
    >
      <FormContext.Provider
        value={{
          formData,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
