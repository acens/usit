ActiveAdmin.register Tour do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :local, :data, :vagas, :photo, :description
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
  form title: 'New Tour' do |f|
   f.inputs 'Create new tour' do
      f.input :local
      f.date_field :date_trip
      f.number_field :vacancy
      f.input :photo, as: :file
      f.input :description
      actions
    end
  end
end
