import React  from 'react';
import { StyleSheet, View } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

class Table extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
  //     tableData: [
  //       ['1', '2', '3', '4'],
  //       ['a', 'b', 'c', 'd'],
  //       ['1', '2', '3', '456\n789'],
  //       ['a', 'b', 'c', 'd']
  //     ]
  //   }
  // }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        // <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        //   <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
        //   <Rows data={state.tableData} textStyle={styles.text}/>
        // </Table>
          <Text> time </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});



export default Table;