import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Icon, BottomSheet, Divider} from 'react-native-elements';
import {PieChart} from 'react-native-chart-kit';
import {DataTable} from 'react-native-paper';
const {height, width} = Dimensions.get('window');

export default function CashScreen() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [displayChart, setDisplayChart] = React.useState(false);
  const [categorySelect, setCategorySelect] = React.useState('Income');
  const [showBottomSheet, setShowBottomSheet] = React.useState(false);
  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, 0.5)`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, 0.5)`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '7',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  const showChart = () => {
    setDisplayChart(!displayChart);
    if (displayChart) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }).start();
    } else if (!displayChart) {
      //   console.log('notok');
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  };

  const incomeData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#877',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const expenditureData = [
    {
      name: 'shopping',
      population: 210000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'netbills',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'houserent',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'wifi',
      population: 8538000,
      color: '#877',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'others',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <ImageBackground
      source={require('../assets/back.png')}
      style={{height, width}}>
      <View
        style={{
          height: height * 0.1,
          width: width,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: height * 0.08,
            width: width * 0.97,
            borderRadius: height * 0.03,
            alignSelf: 'center',
            backgroundColor: '#5765EE',
            alignItems: 'center',
            //   width: width,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Icon
            name="menu"
            type="entypo"
            color="#fff"
            onPress={() => setShowBottomSheet(true)}
          />
          <Text
            style={{
              fontSize: height * 0.03,
              color: '#add',
              fontWeight: 'bold',
            }}>
            {categorySelect}
          </Text>

          <Icon
            name="graph-pie"
            type="foundation"
            color="#fff"
            onPress={() => showChart()}
          />
        </View>
      </View>
      <ScrollView>
        {displayChart ? (
          <Animated.View
            style={{
              height: 'auto',
              width: width * 0.97,
              alignItems: 'center',
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              alignSelf: 'center',
              paddingVertical: 10,
              opacity: fadeAnim,
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}>
            {categorySelect === 'Income' ? (
              <PieChart
                data={incomeData}
                width={width}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'0'}
                center={[0, 0]}
                absolute
              />
            ) : categorySelect === 'Expenditure' ? (
              <PieChart
                data={expenditureData}
                width={width}
                height={220}
                chartConfig={chartConfig}
                accessor={'population'}
                backgroundColor={'transparent'}
                paddingLeft={'0'}
                center={[0, 0]}
                absolute
              />
            ) : null}
          </Animated.View>
        ) : null}

        {categorySelect === 'Income' ? (
          <View
            style={{
              height: height * 0.2,
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: '#343',
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}>
              Total Income
            </Text>
            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'darkgreen',
                }}>
                $897.88
              </Text>
            </View>
          </View>
        ) : categorySelect === 'Expenditure' ? (
          <View
            style={{
              height: height * 0.2,
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: 'darkred',
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}>
              Total Expenditure
            </Text>
            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'darkred',
                }}>
                $947.88
              </Text>
            </View>
          </View>
        ) : null}

        {/* table */}

        {categorySelect === 'Income' ? (
          <View
            style={{
              height: 'auto',
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Income Category</DataTable.Title>
                <DataTable.Title numeric>Amount</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={0}
                numberOfPages={2}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </View>
        ) : categorySelect === 'Expenditure' ? (
          <View
            style={{
              height: 'auto',
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Income Category</DataTable.Title>
                <DataTable.Title numeric>Amount</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={0}
                numberOfPages={2}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </View>
        ) : null}

        {categorySelect === 'Income' ? (
          <View
            style={{
              height: height * 0.1,
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#958',
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Add Income
              </Text>
            </TouchableOpacity>
          </View>
        ) : categorySelect === 'Expenditure' ? (
          <View
            style={{
              height: height * 0.1,
              width: width,
              marginVertical: 5,
              width: width * 0.97,
              borderRadius: height * 0.03,
              elevation: 4,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 5,
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255,244,255, 0.5)',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#958',
                padding: 10,
                margin: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Add Expenditure
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {/* This is BottomTab sheet */}
        <BottomSheet
          isVisible={showBottomSheet}
          containerStyle={{
            backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
          }}>
          <TouchableOpacity
            onPress={() => setShowBottomSheet(false)}
            style={{
              backgroundColor: '#fff',
              width: width,
              height: height * 0.1,
              alignItems: 'center',
              borderTopRightRadius: height * 0.1,
              borderTopLeftRadius: height * 0.1,

              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'darkred',
                }}>
                Cancel
              </Text>
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            onPress={() => {
              setShowBottomSheet(false);
              setCategorySelect('Income');
            }}
            style={{
              backgroundColor: '#fff',
              width: width,
              height: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'darkblue',
                }}>
                Income
              </Text>
            </View>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            onPress={() => {
              setShowBottomSheet(false);
              setCategorySelect('Expenditure');
            }}
            style={{
              backgroundColor: '#fff',
              width: width,
              height: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                  color: 'darkblue',
                }}>
                Expenditure
              </Text>
            </View>
          </TouchableOpacity>
        </BottomSheet>
      </ScrollView>
    </ImageBackground>
  );
}
