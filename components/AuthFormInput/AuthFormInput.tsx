import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, FocusEvent, ReactNode } from "react";

type AuthFormInputProps = {
  changeHandler?: (e: ChangeEvent<any>) => void,
  type: string,
  id: string,
  name: string,
  label: string,
  icon?: ReactNode,
  iconFocusPos?: number,
  onEnterDown?: (e: KeyboardEvent) => void
};

const AuthFormInput = (props: AuthFormInputProps) => {

  const inputFocusHandler = (e: FocusEvent<HTMLInputElement, Element>, iconPos: number) => {
    const targetEl = e.target.nextElementSibling?.children[iconPos] as HTMLDivElement;
    targetEl.style.color = '#3399ff';
  };

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement, Element>, iconPos: number) => {
    const targetEl = e.target.nextElementSibling?.children[iconPos] as HTMLDivElement;
    targetEl.style.color = 'darkgray';
  };

  return (
    <>
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Flex alignItems='center' justifyContent={'flex-end'}>
          <Input type={props.type} id={props.id} name={props.name}
            onChange={props.changeHandler}
            onFocus={e => inputFocusHandler(e, props.iconFocusPos ? props.iconFocusPos : 0)}
            onBlur={e => inputBlurHandler(e, props.iconFocusPos ? props.iconFocusPos : 0)}
            onKeyDown={props.onEnterDown ? e => props.onEnterDown : () => null}

          />
          {
            props.icon ?
              (
                <Flex position='absolute' alignItems={'center'} mr='1em' gap='1em'>
                  {props.icon}
                </Flex>
              ) : null
          }
        </Flex>
      </FormControl>
    </>
  )
};
export default AuthFormInput;