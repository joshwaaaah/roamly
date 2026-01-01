import { Pressable, type PressableProps, Text } from 'react-native';

type Props = PressableProps & {
  title: string,
}

export function Button(props: Props) {
  return (
    <Pressable
    {...props}
    className="bg-yellow-400 p-4 rounded-full mt-4">
      <Text className="font-medium text-center">
        { props.title }
      </Text>
    </Pressable>
  );
}

