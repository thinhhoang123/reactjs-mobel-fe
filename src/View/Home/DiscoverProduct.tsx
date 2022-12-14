import { FC } from 'react';
import CardItem from '../../Components/CardItem/CardItem';
import { Text, Divider } from '@chakra-ui/react';

import ListCardItem from '../../Components/ListCardItems/ListCardItems';
const DiscoverProduct: FC = () => {
  return (
    <>
      <Text>FEATURED</Text>
      <Text fontSize="3xl" as="b">
        DISCOVER PRODUCTS
      </Text>
      <ListCardItem>
        {[1, 2, 3, 1].map((e) => {
          return <CardItem />;
        })}
      </ListCardItem>
    </>
  );
};

export default DiscoverProduct;
