import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BookListScreen from './.expo/screens/BookListScreen';
import ChapterListScreen from './.expo/screens/ChapterListScreen';

const AppNavigator = createStackNavigator(
  {
    BookList: { screen: BookListScreen },
    ChapterList: { screen: ChapterListScreen },
  },
  {
    initialRouteName: 'BookList',
  }
);

export default createAppContainer(AppNavigator);
