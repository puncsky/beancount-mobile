import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { NavigationBar } from "@/common/navigation-bar";
import { contentPadding } from "@/common/screen-util";
import { useTheme } from "@/common/theme";
import { i18n } from "@/translations";
import { analytics } from "@/common/analytics";
import { ColorTheme } from "@/types/theme-props";

type Props = {
  navigation: any;
  route: any;
};

const getStyles = (theme: ColorTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.white,
      flex: 1,
    },
    inputContainer: {
      marginHorizontal: contentPadding,
      marginTop: contentPadding * 2,
      borderBottomColor: theme.black40,
      borderBottomWidth: 1,
    },
    input: {
      color: theme.text01,
      fontSize: 18,
      marginBottom: contentPadding * 0.5,
    },
  });

export function PayeeInputScreen(props: Props): JSX.Element {
  useEffect(() => {
    async function init() {
      await analytics.track("page_view_payee_input", {});
    }
    init();
  }, []);
  const theme = useTheme().colorTheme;
  const styles = getStyles(theme);
  const { payee, onSaved } = props.route.params;
  const [newPayee, setPayee] = useState<string>(payee || "");

  const onRightClick = async () => {
    if (onSaved) {
      onSaved(newPayee);
    }
    await analytics.track("tap_payee_input_save", { payee: newPayee });
    props.navigation.pop();
  };

  return (
    <View style={styles.container}>
      <NavigationBar
        title={i18n.t("payee")}
        showBack
        navigation={props.navigation}
        rightText={i18n.t("save")}
        onRightClick={onRightClick}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newPayee}
          autoFocus
          placeholder={i18n.t("pleaseInput")}
          underlineColorAndroid="transparent"
          clearButtonMode="while-editing"
          onChangeText={(txt) => {
            setPayee(txt);
          }}
        />
      </View>
    </View>
  );
}
