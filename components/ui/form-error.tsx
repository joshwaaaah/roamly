import { ThemedText } from '@/components/themed-text';

type FormErrorProps = {
  error?: { message?: string } | null;
};

export function FormError({ error }: FormErrorProps) {
  if (!error?.message) return null;
  
  return (
    <ThemedText style={{ color: 'red', marginTop: 4, fontSize: 14 }}>
      {error.message}
    </ThemedText>
  );
}

