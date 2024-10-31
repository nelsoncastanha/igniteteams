import type { TouchableOpacityProps } from 'react-native';
import type { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, type ButtonIconTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props){
  return (
    <Container>
      <Icon 
        name={icon}
        type={type} 
      />
    </Container>
  );
}