let res=[

    `import RPi.GPIO as GPIO 
    import time  LED_PIN = 17  
    # GPIO pin connected to the LED 
     # Setup GPIO GPIO.setmode(GPIO.BCM)
      GPIO.setup(LED_PIN, GPIO.OUT)  
      try:     
      while True:       
        # Turn on the LED  
               GPIO.output(LED_PIN,
                GPIO.HIGH) time.sleep(1) 
                 # Wait for 1 second         
                  # Turn off the LED        
                   GPIO.output(LED_PIN, 
GPIO.LOW) time.sleep(1) 
 # Wait for 1 second  
 xcept KeyboardInterrupt:    
  # Clean up GPIO on keyboard interrupt (Ctrl+C)     
  GPIO.cleanup()`,
  
  `import RPi.GPIO as GPIO import time 
   # Define LCD pin mapping (adjust based on your LCD module)
    LCD_RS = 25 LCD_E = 24 LCD_D4 = 23 LCD_D5 = 17 LCD_D6 = 18 LCD_D7 = 22  
    # Define LCD dimensions (number of columns and rows) 
    LCD_COLUMNS = 16 LCD_ROWS = 2  
    def lcd_init():     GPIO.setmode(GPIO.BCM)    
     GPIO.setup(LCD_RS, GPIO.OUT)     GPIO.setup(LCD_E, GPIO.OUT)   
       GPIO.setup(LCD_D4, GPIO.OUT)     GPIO.setup(LCD_D5, GPIO.OUT)   
         GPIO.setup(LCD_D6, GPIO.OUT)     GPIO.setup(LCD_D7, GPIO.OUT)   
            lcd_send_command(0x33)  # Initialize     lcd_send_command(0x32)  
            # Set to 4-bit mode     lcd_send_command(0x28)  # 2 lines, 5x8 font  
               lcd_send_command(0x0C)  # Display on, cursor off, blink off  
                  lcd_send_command(0x01)  # Clear display     time.sleep(0.1) 
                   def lcd_send_command(command):     GPIO.output(LCD_RS, GPIO.LOW)  
                      lcd_write(command >> 4)     lcd_write(command & 0x0F) 
                       def lcd_write(data):     GPIO.output(LCD_RS, GPIO.HIGH)     
                       GPIO.output(LCD_D4, GPIO.HIGH if (data & 0x01) else GPIO.LOW)   
                         GPIO.output(LCD_D5, GPIO.HIGH if (data & 0x02) else GPIO.LOW)   
                         GPIO.output(LCD_D6, GPIO.HIGH if (data & 0x04) else GPIO.LOW)  
                         
                         GPIO.output(LCD_D7, GPIO.HIGH if (data & 0x08) else GPIO.LOW)   
                           lcd_toggle_enable()      GPIO.output(LCD_D4, GPIO.HIGH 
                         if (data & 0x10) else GPIO.LOW)     GPIO.output(LCD_D5, GPIO.HIGH 
                         if (data & 0x20) else GPIO.LOW)     GPIO.output(LCD_D6, GPIO.HIGH 
                         if (data & 0x40) else GPIO.LOW)     GPIO.output(LCD_D7, GPIO.HIGH 
                         if (data & 0x80) else GPIO.LOW)     lcd_toggle_enable()  
                         def lcd_toggle_enable():   
                           GPIO.output(LCD_E, GPIO.HIGH)     time.sleep(0.0005)   
                             GPIO.output(LCD_E, GPIO.LOW)     time.sleep(0.0005)
                               def lcd_display_text(text):     lcd_send_command(0x01) 
                                # Clear display     time.sleep(0.1)     
                                for char in text:         lcd_write(ord(char)) 
                                 try:     lcd_init()     
                                 lcd_display_text("Hello, Raspberry Pi!")    
                                  time.sleep(2)     lcd_display_text("LCD Display Test")   
                                     while True:        
                                      pass  # Keep the script running  except KeyboardInterrupt:  
                                         GPIO.cleanup()`,

    `
    import RPi.GPIO as GPIO import time 
     # Define GPIO pins connected to L293D motor driver 
     MOTOR_ENA = 17 MOTOR_IN1 = 18 MOTOR_IN2 = 27 
      # Setup GPIO mode and pins GPIO.setmode(GPIO.BCM) 
      GPIO.setup(MOTOR_ENA, GPIO.OUT) GPIO.setup(MOTOR_IN1, GPIO.OUT) 
      GPIO.setup(MOTOR_IN2, GPIO.OUT) 
       # Function to control motor direction and speed def control_motor(direction, speed):   
         GPIO.output(MOTOR_IN1, GPIO.HIGH if direction == 'forward' else GPIO.LOW)   
           GPIO.output(MOTOR_IN2, GPIO.LOW if direction == 'forward' else GPIO.HIGH)  
              motor_pwm = GPIO.PWM(MOTOR_ENA, 1000)  # Frequency = 1000 Hz  
                 motor_pwm.start(speed) 
                  # Start PWM with specified duty cycle (0-100) 
                  try:     
                   while True:      
                    # Control motor forward with 50% speed    
                       print("Motor Forward")      
                          control_motor('forward', 50)      
                           time.sleep(2)      
                         # Control motor backward with 75% speed   
                                print("Motor Backward")    
                                control_motor('backward', 75)      
                                 time.sleep(2) 
                          except KeyboardInterrupt:     GPIO.cleanup()
                        
    
    `,
    `
    from machine import Pin from time import sleep from dht import DHT22   
    # if the sensor is DHT11, import DHT11 instead of DHT22  
    # creating a DHT object # change DHT22 to DHT11 if DHT11 is used dht = DHT22(Pin(15))   
    # continuously get sensor readings while the board has power while True:     
    # getting sensor readings    
     dht.measure()     temp = dht.temperature()    
      hum = dht.humidity()      # displaying values to the console 
          print(f"Temperature: {temp}°C   Humidity: {hum}% ")    
            # format method or string concatenation may also be used   
              #print("Temperature: {}°C   Humidity: {:.0f}% ".format(temp, hum))     
              #print("Temperature: " + str(temp) + "°C" + "   Humidity: " + str(hum) + "%")     
              # delay of 2 secs because DHT22 takes a reading once every 2 secs     sleep(2)
    
    `,
    `
    import RPI.GPIO as GPIO import time GPIO.setmode(GPIO.BCM)   
    TRIG_PIN = 23 ECHO_PIN = 24  GPIO.setup(TRIG_PIN,OUT) GPIO.setup(ECHO_PIN,IN)  
    def measure_distance():      GPIO.output(TRIG_PIN,TRUE) time.sleep(0.00001)      
     GPIO.setup(TRIG_PIN,FALSE)   start_time = time.time()      
      stop_time = time.time()       
       while GPIO.input(ECHO_PIN) == 0: 
       start_time = time.time() while GPIO.input(ECHO_PIN) == 1:       
           start_time = time.time() elapsed_time = stop_time - start_time   
                 distance = (elapsed_time* 34300) / 2  #Speed of sound = 343m/s    
                      return distance  try:       while True:     dist = measure_distance()  
                              print(“Distance: {dist:.2f} cm”)          
                              
                time.sleep(1) # Update distance measurement every 1 second except KeyboardInterrupt:     GPIO.cleanup()
    `,
    `
    import RPi.GPIO as GPIO import time  
    # Define GPIO pin number for 
    Pulse Sensor PULSE_SENSOR_PIN = 18  
    defsetup_gpio(): GPIO.setmode(GPIO.BCM) 
    GPIO.setup(PULSE_SENSOR_PIN, GPIO.IN)  
    defget_pulse_rate(): pulse_count = 0 
    last_state = GPIO.input(PULSE_SENSOR_PIN) 
    start_time = time.time()      
    try:         
     while True: current_state = GPIO.input(PULSE_SENSOR_PIN)             
      if current_state != last_state: pulse_count += 1 last_state = current_state           
          # Calculate elapsed time elapsed_time = time.time() - start_time           
            if elapsed_time>= 10:  # Count pulses for 10 seconds pulse_rate = (pulse_count / elapsed_time) * 60  
            # Calculate pulse rate 
            (beats per minute)                 
            return pulse_rate     
             except KeyboardInterrupt:       
              pass  try: setup_gpio()    
             print("Pulse Sensor Initialized. Measure your pulse...")    
               while True: pulse_rate = get_pulse_rate()      
                  print(f"Pulse Rate: {pulse_rate:.2f} BPM")  
                  except KeyboardInterrupt: GPIO.cleanup()
    `,
    `
    python import RPi.GPIO as GPIO import time 
     # Use BCM GPIO numbering GPIO.setmode(GPIO.BCM) 
      # Set up the GPIO pin for input button_pin = 17
       GPIO.setup(button_pin, GPIO.IN, pull_up_down=GPIO.PUD_DOWN) 
        try: while True: # 
        Read the state of the button if GPIO.input(button_pin) == GPIO.HIGH: print("Button Pressed") 
        else: print("Button Released") time.sleep(0.1)  # Delay to debounce the button  except KeyboardInterrupt: 
        # Clean up GPIO settings before exiting GPIO.cleanup()
    `,
    `
    import RPi.GPIO as GPIO import time  
    # Set up GPIO GPIO.setmode(GPIO.BCM)  
    # Use BCM numbering PIR_PIN = 17 
     # The pin where the PIR sensor is connected GPIO.setup(PIR_PIN, GPIO.IN)  
     # Callback function to execute when motion is detected def motion_detected(channel): print("Motion detected!") 
      # Attach event to pin GPIO.add_event_detect(PIR_PIN, GPIO.RISING, callback=motion_detected) 
       try: print("PIR Module Test (CTRL+C to exit)") time.sleep(2) 
        # Give PIR sensor time to initialize print("Ready")
         while True: time.sleep(1) 
          # Infinite loop, can be adjusted except KeyboardInterrupt: print("Quit") GPIO.cleanup() 
           # Clean up GPIO on CTRL+C exit
    `
]
let esp=[
    `
    #include DHT.h	
      #define DHTPIN 4   
        // Digital pin connected to the DHT sensor 
        // Feather HUZZAH ESP8266 note:
         use pins 3, 4, 5, 12, 13 or 14 -- // 
         Pin 15 can work but DHT must be disconnected during program upload. 
          // Uncomment whatever type you're using! //#define DHTTYPE DHT11 
            // DHT 11 #define DHTTYPE DHT22  
             // DHT 22 (AM2302), AM2321 //#define DHTTYPE DHT21 
               // DHT 21 (AM2301)  // Connect pin 1 (on the left)
                of the sensor to +5V 
                // NOTE: If using a 
                board with 3.3V logic 
                like an Arduino Due connect 
                pin 1 // to 3.3V instead of 5V! // Connect pin 2 of the 
                sensor to whatever your DHTPIN is // Connect pin 4 (on the right)
                 of the sensor to GROUND // Connect a 10K resistor from pin 2 (data) 
                 to pin 1 (power) of the sensor  // Initialize DHT sensor. 
                 // Note that older versions of this library took an optional 
                 third parameter to // tweak the timings for faster processors. 
                  This parameter is no longer needed // as the current DHT reading 
                  algorithm adjusts itself to work on faster procs. 
                  DHT dht (DHTPIN, DHTTYPE);  void setup () {   Serial.begin(9600);  
                   Serial.println(F ("DHTxx test!"));    dht. begin (); } 
                    void loop() {   // Wait a few seconds between measurements.   delay (2000); 
                       // Reading temperature or humidity takes about 250 milliseconds! 
                         // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor) 
                           float h = dht. read Humidity ();   // Read temperature as Celsius (the default)  
                            float t = dht. readTemperature ();   // Read temperature as Fahrenheit (is Fahrenheit = true) 
                              float f = dht. readTemperature(true);    
                              // Check if any reads failed and exit early (to try again). 
                                if (isnan(h) || isnan(t) || isnan(f)) {     Serial.println(F ("Failed to read from DHT sensor!"));  
                                   return;   }    // Compute heat index in Fahrenheit (the default)  
                                    float hif = dht. computeHeatIndex (f, h); 
                                      // Compute heat index in Celsius (Fahrenheit = false)  
                                       float hic = dht. computeHeatIndex(t, h, false);  
                                         Serial. print(F ("Humidity: "));   Serial.print(h);  
                                          Serial.print(F ("%  Temperature: "));   Serial.print(t); 
                                            Serial.print(F ("°C "));   Serial.print(f);   
                                            Serial.print(F ("°F  Heat index: "));   
                                            Serial.print(hic);   Serial.print(F ("°C "));   
                                            Serial.print(hif);   Serial.println(F("°F")); }
    `
    ,
    `
    const int trigPin = 5; 
    const int echoPin = 18; 
     //define sound speed in cm/uS #define 
     SOUND_SPEED 0.034 #define CM_TO_INCH 0.393701  
     long duration; float distanceCm; float distanceInch; 
      void setup() {   Serial.begin(115200); //
      Starts the serial communication   pinMode(trigPin, OUTPUT); 
      // Sets the trigPin as an Output   pinMode(echoPin, INPUT); 
      // Sets the echoPin as an Input }  
      void loop() {   // Clears the trigPin   digitalWrite(trigPin, LOW);
         delayMicroseconds(2);   // Sets the trigPin on HIGH state for 10 micro seconds   
         digitalWrite(trigPin, HIGH);   delayMicroseconds(10);   digitalWrite(trigPin, LOW);   
            // Reads the echoPin, returns the sound wave travel time in microseconds   
            duration = pulseIn(echoPin, HIGH);      // Calculate the distance  
             distanceCm = duration * SOUND_SPEED/2;    
               // Convert to inches   distanceInch = distanceCm * CM_TO_INCH;   
                 // Prints the distance in the Serial Monitor 
                   Serial.print("Distance (cm): ");  
                    Serial.println(distanceCm);  
                     Serial.print("Distance (inch): ");   
                     Serial.println(distanceInch);      delay(1000); }
    `,
    `
    #define DO_PIN 13
     // ESP32's pin GPIO13 
     connected to DO pin of the flame sensor  
     void setup () {   // initialize serial communication Serial.begin(9600); 
       // initialize the ESP32's pin as an input pinMode (DO_PIN, INPUT); } 
        void loop () {   int flame_state = digitalRead(DO_PIN);   
         if (flame_state == HIGH) Serial.println("No flame dected => The fire is NOT detected");   
         else Serial.println("Flame dected => The fire is detected"); }
    `,
    `
    int led = 36; 
    int sound_digital = 2; 
    int sound_analog = 4;  
    void setup() 
    {  Serial.begin(9600); pinMode (led, OUTPUT); pinMode (sound_digital, INPUT);   } 
      void loop () {   int val_digital = digitalRead(sound_digital);   
      int val_analog = analogRead(sound_analog);  Serial.print(val_analog); 
      Serial.print("\t"); Serial.println(val_digital);    
      if (val_digital == HIGH)   { digitalWrite (led, HIGH);     delay(3000);   
        }  }
    `,
    `
    #define outputB  35   
     // DATA signal #define outputA 34   
      // CLOCK signal int counter = 0; 
      int aState; int aLastState;  
      void setup() {    pinMode (outputA,INPUT); pinMode (outputB,INPUT); 
          Serial.begin (115200);   
           // Reads the initial state of the outputA    
           aLastState = digitalRead(outputA);   }  
           void loop() {    aState = digitalRead(outputA); 
           // Reads the "current" state of the outputA    
           // If the previous and the 
           current state of the outputA are different, 
           that means a Pulse has occured  
             if (aState != aLastState){         
              // If the outputB state is different to the outputA state, that means the encoder is rotating clockwise 
                   if (digitalRead(outputB) != aState) {        counter ++;      } 
                   else {        counter --;      }      Serial.print("Position: ");    
                     Serial.println(counter);    }    aLastState = aState; 
                     // Updates the previous state of the outputA with the current state }
    `,
    `
    #include <IRremote.h>  
    int RECV_PIN = 15;  
    IRrecvirrecv(RECV_PIN);  
    decode_results results;  
    void setup()
     { Serial.begin(9600); irrecv.enableIRIn(); 
      // Start the receiver }  
      void loop() { if (irrecv.decode(&results)) 
      { Serial.println(results.value, HEX); irrecv.resume(); } }
    `,
    `
    #include <ESP32Servo.h>  
    Servo myservo;  
    // create servo object to control a servo 
    // 16 servo objects can be created on the ESP32  
    int pos = 0;    
    // variable to store the servo position 
    // Recommended PWM GPIO pins on the ESP32 include 
    2,4,12-19,21-23,25-27,32-33  
    int servoPin = 13;  
    void setup() {   // Allow allocation of all timers   ESP32PWM::allocateTimer(0);   ESP32PWM:allocateTimer(1); 
      ESP32PWM::allocateTimer(2);   ESP32PWM::allocateTimer(3); myservo.setPeriodHertz(50);  
        // standard 50 hz servo myservo.attach(servoPin, 500, 2400);
         // attaches the servo on pin 18 to the servo object  
          // using default min/max of 1000us and 2000us   
          // different servos may require different min/max settings  
           // for an accurate 0 to 180 sweeps } 
            void loop() {    for (pos = 0; pos <= 180; pos += 1) 
            { // goes from 0 degrees to 180 degrees     
             // in Steps of 1 degree myservo. write(pos);    
             // tell servo to go to position in variable 'pos'   
               delay(15);            
                // waits 15ms for the servo to reach the position   } 
                  f or (pos = 180; pos >= 0; pos -= 1)
                   { // goes from 180 degrees to 0 degrees myservo. write(pos); 
                       // tell servo to go to position in variable 'pos'     
                       delay (15);     
                        // waits 15ms for the servo to reach the position   } }
    `
]
  
let ard=[
`
 void setup()
     { 
    pinMode(13, OUTPUT);
     // Set pin 13 as an output 
     } 
     void loop() 
     {
      digitalWrite(13, HIGH); 
       delay(1000);          
          digitalWrite(13, LOW);
             delay(1000);      
                   } 

`,
`
 int A= 3; 
  int B= 4; 
  int C= 5;
   int D= 6; 
   int E= 7; 
   int F= 8; 
   int G= 9; 
   int X= 13; 
   int Y= 12;  
   int Z= 11; 
   void setup() 
   { 
    pinMode(A,OUTPUT); 
    pinMode(B,OUTPUT); 
    pinMode(C,OUTPUT); 
    pinMode(D,OUTPUT); 
    pinMode(E,OUTPUT); 
    pinMode(F,OUTPUT);
    pinMode(G,OUTPUT); 
    pinMode(X,OUTPUT); 
    pinMode(Y,OUTPUT); 
    pinMode(Z,OUTPUT); 
      } 
    void loop()
    { 
      digitalWrite(A,HIGH); 
       digitalWrite(B,HIGH);
       digitalWrite(C,HIGH);
       digitalWrite(D,HIGH);
       digitalWrite(E,HIGH);
        digitalWrite(F,HIGH); 
      digitalWrite(G,LOW);
     digitalWrite(X,HIGH);
     digitalWrite(Y,LOW); 
     digitalWrite(Z,LOW);  
     delay(2000); 
     digitalWrite(A,LOW); 
     digitalWrite(B,HIGH);
      digitalWrite(C,HIGH);
       digitalWrite(D,LOW);
        digitalWrite(E,LOW); 
        digitalWrite(F,LOW); 
        digitalWrite(G,LOW); 
        digitalWrite(X,HIGH); 
        digitalWrite(Y,LOW); 
        digitalWrite(Z,LOW); 
        delay(2000); 
        digitalWrite(A,HIGH); 
        digitalWrite(B,HIGH); 
        digitalWrite(C,LOW); 
        digitalWrite(D,HIGH); 
        digitalWrite(E,HIGH); 
        digitalWrite(F,LOW); 
        digitalWrite(G,HIGH); 
        digitalWrite(X,HIGH); 
        digitalWrite(Y,LOW); 
        digitalWrite(Z,LOW); 
        delay(2000); 
        digitalWrite(A,HIGH); 
        digitalWrite(B,HIGH); 
        digitalWrite(C,HIGH); 
        digitalWrite(D,HIGH); 
        digitalWrite(E,LOW); 
        digitalWrite(F,LOW); 
        digitalWrite(G,HIGH); 
        digitalWrite(X,LOW); 
        digitalWrite(Y,HIGH); 
        digitalWrite(Z,LOW); 
        delay(2000); 
        digitalWrite(A,LOW); 
        digitalWrite(B,HIGH); 
        digitalWrite(C,HIGH); 
        digitalWrite(D,LOW); 
        digitalWrite(E,LOW); 
        digitalWrite(F,HIGH); 
        digitalWrite(G,HIGH); 
        digitalWrite(X,LOW); 
        digitalWrite(Y,HIGH); 
        digitalWrite(Z,LOW); 
        delay(2000); 
        digitalWrite(A,HIGH); 
        digitalWrite(B,LOW); 
        digitalWrite(C,HIGH); 
        
        digitalWrite(D,HIGH); 
        digitalWrite(E,LOW);
         digitalWrite(F,HIGH); 
         digitalWrite(G,HIGH); 
         digitalWrite(X,LOW); 
         digitalWrite(Y,HIGH); 
         digitalWrite(Z,LOW); 
         delay(2000); 
         digitalWrite(A,HIGH); 
         digitalWrite(B,LOW); 
         digitalWrite(C,HIGH); 
         digitalWrite(D,HIGH); 
         digitalWrite(E,HIGH); 
         digitalWrite(F,HIGH); 
         digitalWrite(G,HIGH); 
         digitalWrite(X,LOW); 
         digitalWrite(Y,LOW); 
         digitalWrite(Z,HIGH); 
         delay(2000); 
         digitalWrite(A,HIGH); 
         digitalWrite(B,HIGH); 
         digitalWrite(C,HIGH); 
         digitalWrite(D,LOW); 
         digitalWrite(E,LOW); 
         digitalWrite(F,LOW); 
         digitalWrite(G,LOW); 
         
         digitalWrite(X,LOW); 
         digitalWrite(Y,LOW); 
         digitalWrite(Z,HIGH); 
         delay(2000); 
         digitalWrite(A,HIGH); 
         digitalWrite(B,HIGH); 
         digitalWrite(C,HIGH); 
         digitalWrite(D,HIGH); 
         digitalWrite(E,HIGH); 
         digitalWrite(F,HIGH); 
         digitalWrite(G,HIGH); 
         digitalWrite(X,LOW); 
         digitalWrite(Y,LOW); 
         digitalWrite(Z,HIGH); 
         delay(2000); 
         digitalWrite(A,HIGH); 
         digitalWrite(B,HIGH); 
         digitalWrite(C,HIGH); 
         digitalWrite(D,HIGH);
          digitalWrite(E,LOW); 
          digitalWrite(F,HIGH); 
          digitalWrite(G,HIGH); 
          digitalWrite(X,LOW); 
          digitalWrite(Y,LOW); 
          digitalWrite(Z,HIGH);
           delay(2000); 
           }

`,
`
int A=3;
      int B=4;
       int C=5;
     int D=6;
      int E=7;
       int F=8;
       int G=9;
       int X=10;
       int Y=11; 
       int Z=12;   
       void setup()
       {
          pinMode(A, OUTPUT);
          pinMode(B, OUTPUT);
          pinMode(C, OUTPUT); 
          pinMode(D, OUTPUT); 
          pinMode(E, OUTPUT); 
          pinMode(F, OUTPUT); 
          pinMode(G, OUTPUT); 
          pinMode(X, OUTPUT); 
          pinMode(Y, OUTPUT); 
          pinMode(Z, OUTPUT); 
          } 
          void loop() 
           { 
          digitalWrite(A, HIGH); 
          digitalWrite(B ,HIGH); 
          digitalWrite(C, HIGH); 
          digitalWrite(D, HIGH); 
          digitalWrite(E, HIGH); 
          digitalWrite(F, HIGH); 
          digitalWrite(G, LOW); 
          delay(1000); 
          digitalWrite(A, LOW);
           digitalWrite(B ,HIGH); 
           digitalWrite(C, HIGH); 
           digitalWrite(D, LOW); 
           digitalWrite(E, LOW); 
           digitalWrite(F, LOW); 
           digitalWrite(G, LOW); 
           delay(1000); 
           digitalWrite(A, HIGH); 
           digitalWrite(B ,HIGH); 
           digitalWrite(C, LOW); 
           digitalWrite(D, HIGH);
            digitalWrite(E, HIGH);
             digitalWrite(F, LOW); 
             digitalWrite(G, HIGH); 
             delay(1000); 
             digitalWrite(A, HIGH); 
             digitalWrite(B ,HIGH); 
             digitalWrite(C, HIGH); 
             digitalWrite(D, HIGH); 
             digitalWrite(E, LOW); 
             digitalWrite(F, LOW); 
             digitalWrite(G, HIGH); 
             delay(1000); 
             digitalWrite(A, LOW); 
             digitalWrite(B ,HIGH); 
             digitalWrite(C, HIGH); 
             digitalWrite(D, LOW); 
             digitalWrite(E, LOW); 
             digitalWrite(F, HIGH); 
             digitalWrite(G,HIGH); 
             delay(1000); 
             digitalWrite(A, HIGH); 
             digitalWrite(B ,LOW); 
             digitalWrite(C, HIGH); 
             digitalWrite(D, HIGH); 
             digitalWrite(E, LOW); 
             digitalWrite(F, HIGH); 
             digitalWrite(G, HIGH); 
             delay(1000); 
             digitalWrite(A, LOW); 
             digitalWrite(B ,LOW); 
             digitalWrite(C, HIGH); 
             digitalWrite(D, HIGH);
              digitalWrite(E, HIGH);
               digitalWrite(F, HIGH); 
               digitalWrite(G, HIGH); 
               delay(1000); 
               digitalWrite(A, HIGH); 
               digitalWrite(B ,HIGH); 
               digitalWrite(C, HIGH); 
               digitalWrite(D, LOW); 
               digitalWrite(E, LOW); 
               digitalWrite(F, LOW); 
               digitalWrite(G, LOW); 
               delay(1000); 
               digitalWrite(A, HIGH); 
               digitalWrite(B ,HIGH); 
               digitalWrite(C, HIGH); 
               digitalWrite(D, HIGH); 
               digitalWrite(E, HIGH); 
               digitalWrite(F, HIGH); 
               digitalWrite(G, HIGH); 
               delay(1000); 
               digitalWrite(A, HIGH); 
               digitalWrite(B ,HIGH);
                digitalWrite(C, HIGH); 
                digitalWrite(D, LOW); 
                digitalWrite(E, LOW); 
                digitalWrite(F, HIGH);
                 digitalWrite(G, HIGH);
                  delay(1000);           
                    }
`,
`
 int PIR PIN = 4;
       void setup() 
       { 
       serial.begin(9600); 
       pinMode(PIR PIN, INPUT); 
       delay(1000); 
       } Void loop()
         { 
       int motionDetected = digitalRead(PIR PIN); 
        if (motionDetected = = HIGH) 
         {
         serial.println(“Motion detected!”);   
            }
          delay(500); 
             

`,
`
 int sensor_pin=13;
      int sensor_state=1;
       void setup()
       { 
        pinMode(13,INPUT);
        Serial.begin(9600); 
        } 
         void loop()
         {  
         Serial.print("Soil Moisture Level: "); 
         sensor_state = digitalRead(sensor_pin); 
         if (sensor_state == 1) 
         { 
         Serial.println("Wet");
          } 
         else 
         { 
         Serial.println("Dry"); 
           } 
          delay(200); 
           }
`,
`
// Define pin connections
      const int trigPin = 9; 
      const int echoPin = 10; 
       // Define variables long duration; int distance;  
       void setup()
        { 
         // Initialize serial communication Serial.begin(9600);
        // Define pin modes 
        pinMode(trigPin, OUTPUT); 
        pinMode(echoPin, INPUT);
         }  
        void loop()
         {   
        // Clear the trigger pin digitalWrite(trigPin, LOW); delayMicroseconds(2);   
         // Send a 10 microsecond pulse to the trigge
         r pin digitalWrite(trigPin, HIGH); 
         delayMicroseconds(10); digitalWrite(trigPin, LOW);   
          // Measure the duration of the echo pulse   
          duration = pulse In(echo Pin, HIGH);    

          // Calculate distance in cm (speed of sound is 343 m/s) 
            distance = duration * 0.034 / 2;  
              // Print distance to the serial monitor Serial.print("Distance: "); 
              Serial.print(distance); Serial.println(" cm");  
                // Delay before next reading delay(1000);



  
`,
`
 #include <LiquidCrystal.h> 
    LiquidCrystal lcd(12,11,5,4,3,2); 
    void setup()
    { 
    lcd.begin(16,2); 
    lcd.print("ANJALI KUMARI");  
     } 
    void loop(){}
 
`,
`
const int motorPin = 9; 
    void setup() 
    { 
      pinMode(motorPin, OUTPUT); 
    } 
     void loop() 
     {
     digitalWrite(motorPin, HIGH);
      delay(2000); 
      digitalWrite(motorPin, LOW); 
      delay(1000);
       digitalWrite(motorPin, HIGH); 
       delay(2000);
        digitalWrite(motorPin, LOW); 
        delay(1000); 
        }
 
`,
`
# include <Servo.h>; 
    Servo Motor; 
    void setup()
    {   
    Motor.attach(13);
     } 
    void loop ()
    {   
    Motor.write(0);   
    delay(1000);   
    Motor.write(180);  
     delay(1000);   
     }
  
`,
`

const int dirPin1 = 13;
       void setup()
        { 
       pinMode(dirPin1, OUTPUT);
        }
        void loop() 
        { 
        digitalWrite(dirPin1, HIGH);
         digitalWrite(dirPin1, LOW);
          }
 
`,
`
#include <Wire.h>
   #include <Adafruit_GFX.h>
    #include <Adafruit_SSD1306.h>
      #define SCREEN_WIDTH 128
       #define SCREEN_HEIGHT 64
      #define OLED_RESET -1
       Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
         Void setup() 
         {   
         // Initialize OLED display with the I2C address 0x3C (for the 128x64 OLED)
            If(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C))
             { 
            Serial.println(F(“SSD1306 allocation failed”));  
               For(;;);   }   
                // Clear the buffer Display.clearDisplay();    
                // Set text size, color, and display a message Display.setTextSize(1); 
                Display.setTextColor(SSD1306_WHITE); Display.setCursor(0, 0);
                 Display.println(“Hello, OLED!”);    
                 // Display the message Display.display(); 
                 }  Void loop() 
                   {   /
                      / Display doesn’t need refreshing in this simple example
                       }
`



]
export {res,esp,ard}