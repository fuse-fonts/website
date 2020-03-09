export default [
  {
    title: "Create a Group",
    paragraphs: [
      `To create a group, click the "folder" icon on the left of the groups pane. The new group can be immediately named.`,
      `Press Enter to finish naming it, or ESC to keep the auto-generated name.`]
  },
  {
    title: "Rename a Group",
    paragraphs: [
      `Renaming a group is similar to renaming a layer in Photoshop. To rename a group Double-Click it's name.`,
      `Press Enter to finish naming it or ESC to cancel the name change.`]
  },
  {
    title: "Delete a Group",
    paragraphs: [
      `To delete a group, first select the group, then choose the "trash bin" icon on the lower right of the groups pane.`,
      `The only Group you can't delete is the list of "All Fonts". That would be silly.`]
  },
  {
    title: "Add a Font to a Group",
    paragraphs: [`To add a font to a group, select one or many fonts by first clicking them. Then, drag one of the selected fonts to the Group where you want it to be.`, `Note that dragging a font doesn't move the font, it copies the font into the group.`]
  },
  {
    title: "Remove a Font from a Group",
    paragraphs: [
      `To remove a font from a group, first select the group. To the right of each font is a "subtract" or "minus" icon which can be clicked to remove the font from the group.`]
  },
  {
    title: "Resize Panes",
    paragraphs: [
      `To Resize the ratio of the Groups and Font List panes, hover over the separator between the two panes. Click and then drag up or down to change the panel amount allocated to either pane.`,
      `Note: This value is persisted.`]
  },
  {
    title: "Search or Filter Fonts",
    paragraphs: [
      `To search for a font, click the "filter" input on the Fonts pane, and type the Font name or pattern you would like to filter.`,
      `Filtering does not require exact text, so feel free to search for the important parts of a font rather than it's full name.`
    ]
  },
  {
    title: "View Font Previews",
    paragraphs: [
      `To view font previews within the Fonts Pane, select the "Preview Font" checkbox.`,
      `Note: The Fuse Fonts panel must be a certain width to support previewing fonts. If you do not see the "Preview Font" checkbox, widen the Fuse Fonts Panel.`
    ]
  },
  {
    title: "View Groups as a List or Grid",
    paragraphs: [`To Change the Groups pane view, click the middle icons to toggle between viewing groups as a List, or as Grid. Grid view looks much better when Fuse Fonts is it's own floating panel outside Photoshop and has lots of space.`]
  },
  {
    title: "Apply Font to a Text Layer",
    paragraphs: [
      `To apply a Selected font to a text layer the "Apply-Apply to Text Layer" checkbox must be selected.This checkbox can be changed by either selecting a font or opening the Settings.`,
      `When checked, selecting or deselecting any font will apply that font to the currently selected text layer in Photoshop's Layers panel.`
    ]
  },
  {
    title: "Refresh Fonts listed in Fuse Fonts Panel",
    paragraphs: [
      `Fuse Fonts caches the list of fonts you use so that it can load quickly, unlike Photoshop's built-in font features.`,
      `If you add a new font to your system, in order for fuse fonts to know about it, you'll need to refresh the list of known fonts. To do this, Open Fuse Fonts settings and click "Refresh Font List". This will re-cache the new list of fonts, so if you plan to add many fonts, click the button when you're done.`

    ]
  },
  {
    title: "Open Settings",
    paragraphs: [`To open Fuse Fonts' Settings, click the "cog" icon to the lower left of the groups pane.`]
  },
  {
    title: "Clear User Data",
    paragraphs: [
      `To clear User Data click the "Reset User Settings" button within Fuse Fonts' Settings.`,
      `Note: Fuse Fonts doesn't store any specific user data. We don't support companies and products harvesting your data.The user data stored is the interface options that have been chosen so that they persist across Photoshop sessions.`,
      `Fuse Fonts is Open-Source; Thus, anyone can audit it's data storage methods <a rel="nofollow" href="https://github.com/fuse-fonts/plugin/blob/0854df023af8baa05918f9107bb52097add597c1/src/plugin/stores/user-settings.js#L5-L1>here</a>`
    ]
  },
  {
    title: "Delete All Custom Groups",
    paragraphs: [
      `To delete all custom groups, open Fuse Fonts Settings and scroll to the bottom. Expand the "Danger Zone", and click the "Delete All Custom Groups" button. Note, this is irreversible.`
    ]
  },
];