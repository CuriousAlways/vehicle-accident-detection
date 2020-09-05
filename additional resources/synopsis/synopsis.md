# Minor Project {.center}
<br>
# Accident detection using computer vision and Machine Learning {.center}
<br>
## B.Tech Computer Engineering {.center}
##Semester - VII {.center}  
##Code: CEN-791 {.center}   
 <br>
 <br>
###Submitted by: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Submitted to: {#detail}
Mohammad Haris Lari(17BCS088) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;Mr. Danish Raza Rizvi
Raza Khan(17BCS091 )&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; *Project Coordinator*
Fuad Khan(17BCS070)
<br> 
<br>
<br>
<br>
<br>
##Department of Computer Engineering and Technology {.center}
##Jamia Millia Islamia, New Delhi {.center-reduce}
##2020-2021 {.center-reduce}
<br>
##Abstract  {#abstract}

Using computer vision to detect accident is beneficial but daunting task. In our project we would create 
computer vision and AI based solution to detect accidents. This system canbe used to alert authorities 
and help them provide timely medical assistance to the victims.This system would use mask-RCNN and 
centroid based object tracking algorithm. This system would  analyze CCTV feed continuously to 
determine accident. There have been many research in the field and we would try to improve upon 
those in terms of performance in low light and low resolution video feed, so that solution could feasible 
for varying weather and lighting conditions. 
<br>

##Introduction  {#introduction}
There is a huge impact on the society due to traffic accidents where there is a great costs of fatalities 
and injuries. Road accidents are one of the major cause of deaths in India. The metropolitan cities such
as Chennai,  Mumbai  and  New  Delhi  have  been  increasingly highlighted  for  lack  of  road  safety 
and  rash  driving  cases. The recent trends show that there has been an increase in the global number 
of road accidents even in developed countries ^[1]^.  However,   under-developed  and  developing 
countries suffer  a  more  significant  impact  due  to  life  and  economic losses.  These  accidents 
occur  due  to  violation  of  traffic safety  rules,  careless  rash  driving,  driver  drowsiness  and lack  of
good  quality  roads.  The  problem  becomes  more adverse  for  highways  and  hilly  areas  where 
accidents  are unavoidable.The following table summerises GOI report^[2]^ on number of road 
accident :
 
 | year | Total Number of<br>Road accident<br>(in numbers) | %change | Total Number of<br>Persons Killed<br>(in numbers) | %change |
|:----:|--------------------------------------------------|:-------:|---------------------------------------------------|:-------:|
| 2014 |                     4,89,400                     |         |                      1,39,671                     |         |
| 2015 |                     5,01,423                     |   2.46  |                      1,46,133                     |   1.38  |
| 2016 |                     4,80,652                     | -4.14   |                      1,50,785                     | -1.13   |
| 2017 |                     4,64,910                     |  -3.28  |                      1,47,913                     |  -4.78  |
| 2018 |                     4,67,044                     | 0.46    |                      1,51,417                     | -0.33   |

Also in the same GOI road accident report^[1]^ from 2018 states 78,766 deaths in vehicle to vehicle 
accidents which 52% of total deaths in road accident. As we can see deaths in these accidents is very 
high and delay in providing medical attention adds to the number of fatalities. Timely Medical attention 
is the most important factor in saving lives in road accidents. But considering the large road network 
of India that goes through varied terrains, information regarding an accidents may not reach the 
appropriate authority in time. In this project we are trying to automate the process of vehicle to vehicle 
accident detection. This system that would would detect accidents by analyzing CCTV video feeds. The 
system would also try to ascertain severity of accident. 
 <br>
 
## Methodology {#methodology}
Key tasks in our project  are : 
1. Vehicle detection
2. Vehicle tracking and feature extraction
3. Accident detection 

#### *Vehicle Detection:*
For vehicle detection we would apply masked **R-CNN**(region-based convolution networks)^[3]^ to
segment and construct pixel-wise masks for every object in the video frame. After  phase  this  we 
would have a dictionary  containing all  the  class  IDs,  detection  scores,  bounding  boxes,  and  the 
generated masks for a given video frame.
 
#### *Vehicle Tracking:*
For vehicle tracking we would use **centroid tracking** algorithm which uses distance between
centroids of detected vehicle in consecutive frames.

#### *Accident Detection:*
To detect accident we look for overlapping bounding boxes and improve the accuracy by determining
speed and trajectory of vehicle.
<br>
<br>
<br>
## Programming Enviroment and Tools
* python-3.7
* Tensorflow−1.12.0
* Keras
* Ubuntu16.04/Windows10
<br>

## References
1. The World Health Organization  Global Status Report on Road Safety, The World Health
Organization; Geneva, Switzerland, 2018 
2. Road accident in India-2018, Ministry of Road Transport and Highways,GOI
3. K. He, G. Gkioxari, P. Dollr, and R. Girshick, *“Mask r-cnn,”* in Proc. of *IEEE International 
Conference on Computer Vision (ICCV)*, Oct 2017,pp. 2980–2988.
4. Paul Ijjina,Dhananjai Chand,Savyasachi Gupta,Goutham K,*"Computer Vision-based Accident 
Detection in Traffic Surveillance"*,Nov 2019
5. Vipul Gaurav,Sanyam Kumar Singh,Avikant Srivastava,*"Accident Detection, Severity Prediction, 
Identification of AccidentProne Areas in India and Feasibility Study using Improved Image 
Segmentation, Machine Learning and Sensors"*,Oct 2019


 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  