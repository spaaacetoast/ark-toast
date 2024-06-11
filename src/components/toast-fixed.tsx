import { Assign, Toast, Toaster, ark, createToaster, useToastContext } from '@ark-ui/solid';
import { mergeProps } from "@zag-js/solid";
import { ComponentProps } from 'solid-js';
import { ToastVariantProps, toast } from '../../styled-system/recipes';
import { JsxStyleProps } from '../../styled-system/types';
import { createStyleContext } from '../lib/create-style-context';

interface RootFixedProps extends ComponentProps<"div"> { }
const RootFixed = (props: RootFixedProps) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(() => toast().getRootProps(), props);

  return (
    <ark.div {...mergedProps}>
      <ark.div {...toast().getGhostBeforeProps()} />
      {props.children}
      <ark.div {...toast().getGhostAfterProps()} />
    </ark.div>
  );
};

const { withProvider, withContext } = createStyleContext(toast);

interface RootProps
  extends Assign<JsxStyleProps, Toast.RootProps>,
  ToastVariantProps { }

const Root = withProvider<RootProps>(RootFixed, "root");

const ActionTrigger = withContext<
  Assign<JsxStyleProps, Toast.ActionTriggerProps>
>(Toast.ActionTrigger, "actionTrigger");

const CloseTrigger = withContext<
  Assign<JsxStyleProps, Toast.CloseTriggerProps>
>(Toast.CloseTrigger, "closeTrigger");

const Description = withContext<
  Assign<JsxStyleProps, Toast.DescriptionProps>
>(Toast.Description, "description");

const Title = withContext<Assign<JsxStyleProps, Toast.TitleProps>>(
  Toast.Title,
  "title",
);

export const BasicFixed = () => {
  const toaster = createToaster({
    placement: 'bottom-end',
    gap: 24,
  });

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          toaster.create({
            title: 'Loading!',
            description: 'We are loading something for you. Please wait.',
            type: 'loading',
            duration: Infinity
          })
        }
      >
        Add Fixed Toast
      </button>
      <Toaster toaster={toaster}>
        {(toast) => (
          <Root>
            <Title>{toast().title}</Title>
            <Description>{toast().description}</Description>
            <CloseTrigger>{/* <XIcon /> */}X</CloseTrigger>
          </Root>
        )}
      </Toaster>
    </div>
  );
};
