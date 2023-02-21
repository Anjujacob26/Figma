figma.showUI(__html__);

figma.ui.resize(400,300);

figma.ui.onmessage = pluginMessage => {
  console.log("Username : ",pluginMessage.username);
  console.log("Password : ",pluginMessage.password);

  // figma.closePlugin();
}
