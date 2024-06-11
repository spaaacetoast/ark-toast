import { Assign, Toast, Toaster, createToaster } from '@ark-ui/solid';
import { createStyleContext } from '~/lib/create-style-context';
import { ToastVariantProps, toast } from '../../styled-system/recipes';
import { JsxStyleProps } from '../../styled-system/types';

const { withProvider, withContext } = createStyleContext(toast);

interface RootProps
  extends Assign<JsxStyleProps, Toast.RootProps>,
  ToastVariantProps { }

const Root = withProvider<RootProps>(Toast.Root, "root");

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

export const Basic = () => {
  const toaster = createToaster({
    placement: 'bottom-start',
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

          })
        }
      >
        Add Toast
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
