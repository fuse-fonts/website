export default [
  {
    title: "Enable Fuse Fonts",
    video: "enable-fuse-fonts.mp4",
    paragraphs: [
      `To enable Fuse Fonts, first make sure you've restarted Photoshop after installing. Then in the title bar, go to <code>Window > Extensions > Fuse Fonts</code>.`]
  },

  {
    title: "Create a Group",
    video: "create-a-group.mp4",
    paragraphs: [
      `To create a group, click the "folder" icon on the left of the groups pane. The new group can be immediately named.`,
      `Press Enter to finish naming it, or ESC to keep the auto-generated name.`]
  },
  {
    title: "Rename a Group",
    video: "rename-a-group.mp4",
    paragraphs: [
      `Renaming a group is similar to renaming a layer in Photoshop. To rename a group Double-Click it's name.`,
      `Press Enter to finish naming it or ESC to cancel the name change.`]
  },
  {
    title: "Delete a Group",
    video: "delete-a-group.mp4",
    paragraphs: [
      `To delete a group, first select the group, then choose the "trash bin" icon on the lower right of the groups pane.`,
      `The only Group you can't delete is the list of "All Fonts". That would be silly.`]
  },
  {
    title: "Add a Font to a Group",
    video: "add-a-font-to-a-group.mp4",
    paragraphs: [`To add a font to a group, select one or many fonts by first clicking them. Then, drag one of the selected fonts to the Group where you want it to be.`, `Note that dragging a font doesn't move the font, it copies the font into the group.`]
  },
  {
    title: "Remove a Font from a Group",
    video: "remove-a-font-from-a-group.mp4",
    paragraphs: [
      `To remove a font from a group, first select the group. To the right of each font is a "subtract" or "minus" icon which can be clicked to remove the font from the group.`]
  },
  {
    title: "Resize Panes",
    video: "resize-panes.mp4",
    paragraphs: [
      `To Resize the ratio of the Groups and Font List panes, hover over the separator between the two panes. Click and then drag up or down to change the panel amount allocated to either pane.`,
      `Note: This value is persisted.`]
  },
  {
    title: "Search or Filter Fonts",
    video: "search-or-filter-fonts.mp4",
    paragraphs: [
      `To search for a font, click the "filter" input on the Fonts pane, and type the Font name or pattern you would like to filter.`,
      `Filtering does not require exact text, so feel free to search for the important parts of a font rather than it's full name.`
    ]
  },
  {
    title: "View Font Previews",
    video: "view-font-previews.mp4",
    paragraphs: [
      `To view font previews within the Fonts Pane, select the "Preview Font" checkbox.`,
      `Note: The Fuse Fonts panel must be a certain width to support previewing fonts. If you do not see the "Preview Font" checkbox, widen the Fuse Fonts Panel.`
    ]
  },
  {
    title: "View Groups as a List or Grid",
    video: "view-groups-as-a-list-or-grid.mp4",
    paragraphs: [`To Change the Groups pane view, click the middle icons to toggle between viewing groups as a List, or as Grid. Grid view looks much better when Fuse Fonts is it's own floating panel outside Photoshop and has lots of space.`]
  },
  {
    title: "Open Settings",
    video: "open-settings.mp4",
    paragraphs: [`To open Fuse Fonts' Settings, click the "cog" icon to the lower left of the groups pane.`]
  },
  {
    title: "Apply Font to a Text Layer",
    video: "apply-font-to-a-text-layer.mp4",
    paragraphs: [
      `To apply a Selected font to a text layer the "Apply-Apply to Text Layer" checkbox must be selected. This checkbox can be changed by either selecting a font or opening the Settings.`,
      `When checked, selecting or deselecting any font will apply that font to the currently selected text layer in Photoshop's Layers panel.`
    ]
  },
  {
    title: "Refresh Fonts listed in Fuse Fonts",
    video: "refresh-fonts-list.mp4",
    paragraphs: [
      `Fuse Fonts caches the list of fonts you use so that it can load quickly, unlike Photoshop's built-in font features.`,
      `If you add a new font to your system, in order for fuse fonts to know about it, you'll need to refresh the list of known fonts. To do this, Open Fuse Fonts settings and click "Refresh Font List". This will re-cache the new list of fonts, so if you plan to add many fonts, click the button when you're done.`

    ]
  },
  {
    title: "Reset User Settings",
    video: "reset-user-settings.mp4",
    paragraphs: [
      `To clear User Settings. click the "Reset User Settings" button within Fuse Fonts' Settings.`,
      `Note: Fuse Fonts doesn't store any specific user data. We don't support companies and products harvesting your data. The user data stored is the interface options that have been chosen so that they persist across Photoshop sessions.`,
      `Fuse Fonts is Open-Source; Thus, anyone can audit it's data storage methods <a rel="nofollow" href="https://github.com/fuse-fonts/plugin/blob/0854df023af8baa05918f9107bb52097add597c1/src/plugin/stores/user-settings.js#L5-L1">on GitHub</a>.`
    ]
  },
  {
    title: "Delete All Custom Groups",
    video: "delete-all-custom-groups.mp4",
    paragraphs: [
      `To delete all custom groups, open Fuse Fonts Settings and scroll to the bottom. Expand the "Danger Zone", and click the "Delete All Custom Groups" button. Note, this is irreversible.`
    ]
  },
];