/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/flyingcircus/templates/actor/parts/actor-features.html",
    "systems/flyingcircus/templates/actor/parts/actor-items.html",
    "systems/flyingcircus/templates/actor/parts/actor-spells.html",
    "systems/flyingcircus/templates/actor/parts/actor-effects.html",
    "systems/flyingcircus/templates/actor/parts/actor-moves.html",
  ]);
};
