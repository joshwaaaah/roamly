import {
  Pressable,
  type PressableProps,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

type Props = PressableProps & {
  title: string;
  loading?: boolean;
};

export function Button(props: Props) {
  const { loading, title, ...rest } = props;
  return (
    <Pressable {...rest} className="bg-black p-5 rounded-xl">
      <Text
        className={`text-center text-white text-lg ${loading ? 'opacity-0' : ''}`}
      >
        {title}
      </Text>

      {loading && (
        <View className="absolute inset-0 flex items-center justify-center">
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      )}
    </Pressable>
  );
}
