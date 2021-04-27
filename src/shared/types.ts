import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export interface IStackScreenProps {
	navigation: StackNavigationProp<any, any>;
	route: RouteProp<any, any>;
}

export interface IRoute {
	[key: string]: {
		name: string;
		component: React.FC<any>;
	};
}