import React from "react";

import { Image, SafeAreaView, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { styles } from "./styles";
import useServicesOrdersViewModel from "./View.model";
import { Button } from "../../Components/Button/indext";
import { QTPeople } from "./model";
import SelectDropdown from "react-native-select-dropdown";
import { useRoute } from "@react-navigation/native";
import { SpecificService } from "../../@types/navigation";
import TextAreaComponent from "../../Components/TextArea";
import { NativeBaseProvider, Center, Toast } from "native-base";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import useViewController from "./viewController";

function ServiceOrders() {
  const { dataServiceOrders } = useServicesOrdersViewModel();
  const {
    setText,
    Save,
    onChangeDate,
    onChangeTime,
    showDatepicker,
    date,
    show,
    showTimepicker,
    mode,
    time,
    back,
    People,
  } = useViewController();
  const route = useRoute();
  const specificService = route.params as SpecificService;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <View style={styles.arrow}>
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            onPress={() => back()}
          />
        </View>
        <Text style={styles.textScreen}>Marcar Serviço</Text>
      </View>

      {specificService.isSpecific ? (
        <>
          <Text style={styles.textSection}>Serviço especifico</Text>
          <View style={styles.TextAreaView}>
            <NativeBaseProvider>
              <Center flex={1} width={"95%"}>
                <TextAreaComponent
                  onChangeText={(text: string) => setText(text)}
                />
              </Center>
            </NativeBaseProvider>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.textSection}>{dataServiceOrders.type}</Text>

          <View style={styles.touchContainer}>
            <View style={styles.viewDesc}>
              <Text style={styles.title}>{dataServiceOrders.title}</Text>
              <Text style={styles.duration}>
                {dataServiceOrders.duration} min
              </Text>
              <Text style={styles.price}>$ {dataServiceOrders.price}</Text>
            </View>

            <View style={styles.viewImg}>
              <Image
                style={styles.image}
                source={{ uri: `${dataServiceOrders.img}` }}
              />
            </View>
          </View>
        </>
      )}

      <View>
        <Text style={styles.textSection}>Selecionar Data: </Text>
        <View style={styles.viewSelectData}>
          <Button
            width="60%"
            height={60}
            onPress={showDatepicker}
            title="Data"
          />
          <View style={styles.viewSelectedData}>
            <Text style={styles.selectedData}>
              {format(date, "dd/MM/yyyy")}
            </Text>
          </View>
        </View>
        {show && mode === "date" && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            onChange={onChangeDate}
          />
        )}
      </View>

      <View>
        <Text style={styles.textSection}>Selecionar Dia: </Text>
        <View style={styles.viewSelectData}>
          <Button
            width="60%"
            height={60}
            onPress={showTimepicker}
            title="Horário"
          />
          <View style={styles.viewSelectedData}>
            <Text style={styles.selectedData}>
              {time.toLocaleTimeString("pt-BR")}
            </Text>
          </View>
        </View>
        {show && mode === "time" && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            is24Hour={true}
            mode={"time"}
            onChange={onChangeTime}
          />
        )}
      </View>

      <View style={styles.viewqtdPeople}>
        <View style={styles.viewqtdTextSection}>
          <Text style={styles.textSection}>Quantidade de pessoas: </Text>
        </View>
        <SelectDropdown
          buttonStyle={styles.select}
          dropdownStyle={styles.selectDropdown}
          rowStyle={styles.selectRow}
          data={QTPeople}
          defaultButtonText={"1"}
          onSelect={(selectedItem, index) => {
            People(selectedItem);
          }}
          onChangeSearchInputText={() => {}}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

      <View style={styles.buttonSubmit}>
        <Button
          title="Criar Serviço"
          onPress={() => Save(specificService.isSpecific)}
        />
      </View>
    </SafeAreaView>
  );
}

export default ServiceOrders;
