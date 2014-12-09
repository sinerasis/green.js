/*!
@name green.js
@author Jeff Baker
@requires jQuery
*/

$(function() {
    // An image to use as replacement.
    var green = 'data:image/gif;base64,R0lGODlhAQABAPAAACKLIv///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
    
    // jQuery selector for the desired swap area.
    var targetArea = $('#content img');
    
    // The desired hotkey, for example 103 equates to 'g'.
    var hotkey = 103;
    
    // Listen for keypress.
    $('body').keypress(function(a) {
        // Listen to our desired hotkey specifically.
        if(a.keyCode == hotkey) {
            targetArea.each(function(i, e) {
                // Save our selector for later use.
                var elem = $(e);
                
                // Swap or Revert
                if(elem.attr('src') == green) {
                    // Placeholder is already displayed, revert.
                    elem.attr('src', elem.attr('swap-src'));
                } else {
                    // Save the existing src string for reverting.
                    elem.attr('swap-src', elem.attr('src'));
                    
                    // Swap in our green placeholder.
                    elem.attr('src', green);
                }
            });
        }
    });
});
