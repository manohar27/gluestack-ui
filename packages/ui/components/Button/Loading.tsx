import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, MinusIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonIsLoadingTemp: MyButtonStory = ({}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <Wrapper>
      <HStack space="md">
        <Button opacity={isLoading ? '0.4' : '1'}>
          <Button.Spinner color="white" />
        </Button>
        <Button opacity={isLoading ? '0.4' : '1'}>
          <Button.Spinner color="white" mr="$2" />
          <Button.Text>Submitting</Button.Text>
        </Button>
        <Button opacity={isLoading ? '0.4' : '1'}>
          <Button.Text>Submitting</Button.Text>
          <Button.Spinner color="white" ml="$2" />
        </Button>
      </HStack>
    </Wrapper>
  );
};

export const Loading = ButtonIsLoadingTemp.bind({});

Loading.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
