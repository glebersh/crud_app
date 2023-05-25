import { Flex, FormControl, FormLabel, Input, useColorMode } from "@chakra-ui/react";
import { ChangeEvent, FocusEvent, ReactNode, useRef } from "react";

type AuthFormInputProps = {
  changeHandler?: (e: ChangeEvent<any>) => void,
  type: string,
  id: string,
  name: string,
  label: string,
  icon?: ReactNode,
  iconFocusPos?: number,
  onEnterDown?: (e: KeyboardEvent) => void,
  iconHandler?: () => void
};

const AuthFormInput = (props: AuthFormInputProps) => {

  const ref = useRef<HTMLDivElement>(null);

  const inputFocusHandler = (e: FocusEvent<HTMLInputElement, Element>, iconPos: number) => {
    const targetEl = e.target.nextElementSibling?.children[iconPos] as HTMLDivElement;
    ref.current ? ref.current.style.border = '2px solid #3399ff' : null;
    targetEl.style.color = '#3399ff';
  };

  const inputBlurHandler = (e: FocusEvent<HTMLInputElement, Element>, iconPos: number) => {
    const targetEl = e.target.nextElementSibling?.children[iconPos] as HTMLDivElement;
    ref.current ? ref.current.style.border = '2px solid #ddd' : null;
    targetEl.style.color = 'darkgray';
  };

  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';

  return (
    <>
      <FormControl>
        <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
        <Flex alignItems='center' justifyContent={'space-between'} border='2px solid #ddd'
          borderRadius='.35em'
          ref={ref} transition={'all .33s'}>

          <Input type={props.type} id={props.id} name={props.name} className={isLight ? 'custom_input_autofill_default_light' : 'custom_input_autofill_default_dark'}
            onChange={props.changeHandler}
            onFocus={e => inputFocusHandler(e, props.iconFocusPos ? props.iconFocusPos : 0)}
            onBlur={e => inputBlurHandler(e, props.iconFocusPos ? props.iconFocusPos : 0)}
            onKeyDown={props.onEnterDown ? e => props.onEnterDown : () => null}
            outline='none !important'
            w='80%'
            border='none'
            focusBorderColor="transparent"
            backgroundColor='transparent'
          />
          {
            props.icon ?
              (
                <Flex alignItems={'center'} m='0 1em 0 auto' gap='1em'>
                  {props.icon}
                </Flex>
              ) : null
          }
        </Flex >
      </FormControl >
    </>
  )
};
export default AuthFormInput;