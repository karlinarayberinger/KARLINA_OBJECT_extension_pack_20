/**
 * file: beats_machine.js
 * type: JavaScript
 * author: karbytes
 * date: 09_SEPTEMBER_2024
 * license: PUBLIC_DOMAIN
 */

/**
 * Return a String type value which describes the number of milliseconds which have elapsed since the Unix Epoch.
 * 
 * Note that the Unix Epoch is 01_JANUARY_1970 at 0 hours, 0 minutes, 0 seconds, and 0 seconds 
 * (i.e. 00:00:00) (i.e. midnight) (Coordinated Universal Time (UTC)).
 * 
 * @return {String} text which denotes the number of milliseconds which have elapsed since the Unix Epoch.
 */
function generate_time_stamp() {
    const milliseconds_elapsed_since_unix_epoch = Date.now();
    return milliseconds_elapsed_since_unix_epoch + " milliseconds since midnight on 01_JANUARY_1970.";
}

/**
 * Return a String type value which is used to instantiate a paragraph type web page element such that
 * the String type value which is passed into this function as its only input is that paragraph element's 
 * inner HTML content.
 * 
 * Note that the String type constant variable values are broken up into single-character String type values 
 * to avoid causing the WordPress web page editor to interpret HTML tags in the web page body with 
 * source code which is hosted on that web page inside of PRE (preformatted) web page elements.
 * 
 * @param {String} inner_HTML is assumed to be plain text or HTML content.
 * 
 * @return {String} a sequence of text characters which is used to instantiate a paragraph (P) web page element.
 */
function generate_paragraph_html_element(inner_html) {
    const opening_paragraph_tag = ('<' + 'p' + '>'), closing_paragraph_tag = ('<' + '/' + 'p' + '>');
    try {
        if (typeof inner_html.length !== "number") throw 'The expression (typeof inner_html.length !== "number") was evaluated to be true.';
        return opening_paragraph_tag + inner_html + closing_paragraph_tag;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_paragraph_html_element(inner_html): " + exception);
    }
}

/**
 * Generate a drop-down menu of various pitches (and a pitch is a particular sound wave frequency).
 * 
 * Return a String type value which is used to instantiate a select type web page element such that
 * the String type value which is passed into this function as its only input is that select menu element's
 * id property value.
 * 
 * When clicked on, the select menu interface element will expand to display a list of all sound frequencies
 * (in units named hertz (which is abreviated as Hz (and which indicates some number of cycles per second)))
 * which are nonnegative integers denoting the number of oscillations per second for each of those twenty beat frequencies.
 * 
 * Each of the twenty beat pitch frequencies listed in the drop-down menu are arranged in acending order 
 * starting with the menu option at the top of the list (which is 0 Hz) 
 * and then, starting with the second option in the list (which is 200 Hz),
 * incrementing the beat pitch frequency value by some constant positive integer number of Hz (i.e. 45)
 * until the menu option at the bottom of the list (which is 1010 Hz) is reached.
 * 
 * @param {String} select_id is assumed to be either 
 *                 "track_0_pitch" or else
 *                 "track_1_pitch" or else
 *                 "track_2_pitch".
 * 
 * @return {String} a sequence of text characters which is used to instantiate an expandable list menu (SELECT) web page element.
 */
function generate_pitch_frequency_menu_select_html_element(select_id) {
    let select_menu = '', option = '', i = 0, N = 200;
    let default_menu_option_label = "Do Not Play (i.e. 0 Hz)";
    try {
        if (typeof select_id.length !== "number") throw 'The expression (typeof select_id.length !== "number") was evaluated to be true.';
        if ((select_id !== "track_0_pitch") ||
            (select_id !== "track_1_pitch") ||
            (select_id !== "track_2_pitch"))
        throw 'select_id must either be "track_0_pitch" or else "track_1_pitch" or "track_2_pitch".';
        select_menu = ('<' + 'select id="' + select_id + '" style="text-align:center"' + '>');
        for (i = 0; i < 20; i += 1) {
            if (i === 0) option = (('<' + 'option value="0" selected' + '>') + default_menu_option_label + ('<' + '/' + '>'));
            else {
            	option = ('<' + 'option value="' + N + '"' + '>');
            	option += (N + ' Hz' + ('<' + '/' + 'option' + '>'));
        	}
        	select_menu += option;
        	N += 45;
        }
        select_menu += ('<' + '/' + 'select' + '>');
        return select_menu;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_pitch_frequency_menu_select_html_element(select_id): " + exception);
    } 
}

/**
 * Generate a drop-down menu of various beat durations (and a beat duration is the time interval 
 * in which the same tone is played immediately in succession).
 * 
 * Return a String type value which is used to instantiate a select type web page element such that
 * the String type value which is passed into this function as its only input is that select menu element's
 * id property value.
 * 
 * When clicked on, the select menu interface element will expand to display a list of all beat durations
 * (in units named seconds (and, according to the International System of Units (SI), the second is defined 
 * scientifically as the duration of 9,192,631,770 periods of the radiation corresponding to the transition 
 * between the two hyperfine levels of the ground state of the cesium-133 atom)).
 * 
 * Each of the ten beat durations listed in the drop-down menu are arranged in acending order 
 * starting with the menu option at the top of the list (which is 1/16 second (i.e. 0.0625 second)) 
 * and then incrementing the beat duration by some positive number of seconds (between 0.0625 seconds and 1 second)
 * until the menu option at the bottom of the list (which is 2 seconds) is reached.
 * 
 * @param {String} select_id is assumed to be either 
 *                 "track_0_duration" or else
 *                 "track_1_duration" or else
 *                 "track_2_dutation".
 * 
 * @return {String} a sequence of text characters which is used to instantiate an expandable list menu (SELECT) web page element.
 */
function generate_beat_frequency_menu_select_html_element(select_id) {
    let select_menu = '', option = '', i = 0;
    let default_menu_option_label = "1/16 second (i.e. 0.0625 second)";
    let menu_option_values = [0.0625, 0.25, 0.5, 0.75, 1, 1.0625, 1.25, 1.5, 1.75, 2];
    let menu_option_label_prefaces = ["1/16", "1/4", "1/2", "3/4", "1", "17/16", "5/4", "3/2", "7/4", "2"];
    try {
        if (typeof select_id.length !== "number") throw 'The expression (typeof select_id.length !== "number") was evaluated to be true.';
        if ((select_id !== "track_0_duration") ||
            (select_id !== "track_1_duration") ||
            (select_id !== "track_2_duration"))
        throw 'select_id must either be "track_0_duration" or else "track_1_duration" or "track_2_duration".';
        select_menu = ('<' + 'select id="' + select_id + '" style="text-align:center"' + '>');
        for (i = 0; i < 10; i += 1) {
            if (i === 0) option = (('<' + 'option value="' + menu_option_values[0] + '" selected' + '>') + default_menu_option_label + ('<' + '/' + '>'));
            else {
            	option = ('<' + 'option value="' + menu_option_values[i] + '"' + '>');
            	option += menu_option_label_prefaces[i];
            	if (i > 4) option += (' seconds (' + menu_option_values[i] + ' seconds)');
            	else option += (' second (' + menu_option_values[i] + ' second)');
            	option += ('<' + '/' + 'option' + '>');
        	}
        	select_menu += option;
        }
        select_menu += ('<' + '/' + 'select' + '>');
        return select_menu;
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of generate_beat_frequency_menu_select_html_element(select_id): " + exception);
    } 
}

/**
 * Respond to the event of the web page named beats_machine.html being loaded by a web browser.
 * 
 * This function populates the six select menus on that web page with their respective menu options
 * (and those select menus have the HTML element identifiers (ids) are as follows:
 * 		"track_0_duration",
 * 		"track_0_pitch",
 * 		"track_1_duration",
 * 		"track_1_pitch",
 * 		"track_2_duration", and
 * 		"track_2_pitch").
 * 
 * This function also prints a time-stamped message indicating when the web page was last 
 * loaded by the web browser in a DIV element on that web page whose identifier is "console".
 * 
 * Assume that all three files which constitute this single web page application are located
 * in the same local file directory (and those file are 
 * karbytes_aesthetic.css, beats_machine.js, and beats_machine.html).
 */
function initialize_application() {
    // Initialize variables which are local to this function.
    let time_stamped_message = "", initial_output_message = "";
    let canvas_container_div = undefined, output_div = undefined, console_div = undefined, generate_button_container_paragraph = undefined;
    let a_x_menu_container_paragraph = undefined, a_y_menu_container_paragraph = undefined;
    let b_x_menu_container_paragraph = undefined, b_y_menu_container_paragraph = undefined;
    let c_x_menu_container_paragraph = undefined, c_y_menu_container_paragraph = undefined;

    // Execute a try-catch block. If runtime exceptions are found, exit the try block and print an error message to the web browser console.
    try {
        // Populate the div whose identifier is "console" with a time stamped message indicating that this function was called (and when it was called).
        time_stamped_message = ("The function named initialize_application() was called at time: " + generate_time_stamp());
        console.log(time_stamped_message);
        time_stamped_message = generate_paragraph_html_element(time_stamped_message);
        console_div = document.getElementById("console");
        console_div.innerHTML = time_stamped_message;
        
        // Populate the "a_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object A.
        a_x_menu_container_paragraph = document.getElementById("a_x_menu_container");
        a_x_menu_container_paragraph.innerHTML = ('A.X := ' + generate_coordinate_menu_select_html_element("a_x_menu") + '. // horizontal position of two-dimensional POINT labeled A.'); 

        // Populate the "a_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object A.
        a_y_menu_container_paragraph = document.getElementById("a_y_menu_container");
        a_y_menu_container_paragraph.innerHTML = ('A.Y := ' + generate_coordinate_menu_select_html_element("a_y_menu") + '. // vertical position of two-dimensional POINT labeled A.');  

        // Populate the "b_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object B.
        b_x_menu_container_paragraph = document.getElementById("b_x_menu_container");
        b_x_menu_container_paragraph.innerHTML = ('B.X := ' + generate_coordinate_menu_select_html_element("b_x_menu") + '. // horizontal position of two-dimensional POINT labeled B.'); 

        // Populate the "B_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object B.
        b_y_menu_container_paragraph = document.getElementById("b_y_menu_container");
        b_y_menu_container_paragraph.innerHTML = ('B.Y := ' + generate_coordinate_menu_select_html_element("b_y_menu") + '. // vertical position of two-dimensional POINT labeled B.');  

        // Populate the "c_x_menu_container" paragraph element with a select menu for choosing an integer value for the X property of POINT object C.
        c_x_menu_container_paragraph = document.getElementById("c_x_menu_container");
        c_x_menu_container_paragraph.innerHTML = ('C.X := ' + generate_coordinate_menu_select_html_element("c_x_menu") + '. // horizontal position of two-dimensional POINT labeled C.'); 

        // Populate the "C_y_menu_container" paragraph element with a select menu for choosing an integer value for the Y property of POINT object B.
        c_y_menu_container_paragraph = document.getElementById("c_y_menu_container");
        c_y_menu_container_paragraph.innerHTML = ('C.Y := ' + generate_coordinate_menu_select_html_element("c_y_menu") + '. // vertical position of two-dimensional POINT labeled C.'); 

        // Populate the "generate_button_container" paragraph element with a button input web page element which calls the function named generate_triangle_using_input_coordinates().
        generate_button_container = document.getElementById("generate_button_container");
        generate_button_container.innerHTML = ('<' + 'input type="button" value="GENERATE" style="text-align:center" onclick="generate_triangle_using_input_coordinates()"' + '/' + '>'); 
    }
    catch(exception) {
        console.log("An exception to normal functioning occurred during the runtime of initialize_application(): " + exception);
    }
}