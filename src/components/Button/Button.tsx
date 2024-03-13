import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {memo} from 'react';
import type {TouchableOpacityProps} from 'react-native';
import type {FC, JSX} from 'react';

type ButtonProps = {
  variant: 'positive' | 'negative';
  label: string;
} & Pick<TouchableOpacityProps, 'onPress'>;

const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {variant, label} = props;

  return (
    <TouchableOpacity activeOpacity={0.5} {...props}>
      <Text
        style={[
          styles.btnLabelStyle,
          variant === 'positive'
            ? styles.textVariantPositiveStyle
            : styles.textVariantNegativeStyle,
        ]}>
        {label ?? ''}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textVariantPositiveStyle: {
    color: '#28A745',
  },
  textVariantNegativeStyle: {
    color: '#DC3545',
  },
  btnLabelStyle: {
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default memo(Button);
