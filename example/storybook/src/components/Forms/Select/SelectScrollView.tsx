import React, { useCallback, useMemo } from 'react';

import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => <Select.Item label={item} value={item} />,
    []
  );

  return (
    <Center>
      <Select
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        placeholder="Select option"
        {...props}
      >
        <Select.Trigger>
          <Select.Input />
          <Select.Icon mr="$3">
            <Icon as={ChevronDownIcon} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Backdrop />
          <Select.Content>
            <Select.DragIndicatorWrapper>
              <Select.DragIndicator />
            </Select.DragIndicatorWrapper>
            <Select.ScrollView>{data.map(renderItem)}</Select.ScrollView>
          </Select.Content>
        </Select.Portal>
      </Select>
    </Center>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
