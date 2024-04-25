// Tạo danh sách module
{
    // Danh sách các modules
    const modules = ['Contact', 'Blog', 'Pricing', 'Home page', 'Header section', 'Footer section'];
                                    
    // Lặp qua mảng modules và tạo phần tử HTML cho mỗi module
    modules.forEach(module => {
        // Tạo phần tử <a> cho module
        const moduleLink = document.createElement('a');
        moduleLink.href = '#';
        moduleLink.id = module.toLowerCase().replace(/\s/g, '-');
        moduleLink.className = 'list-group-item list-group-item-action rounded border my-2 py-3';

        // Tạo phần tử <div> cho checkbox và label
        const div = document.createElement('div');
        div.className = 'form-check';

        // Tạo phần tử <input> cho checkbox
        const input = document.createElement('input');
        input.className = 'form-check-input module-checkbox';
        input.type = 'checkbox';
        input.value = '';
        input.id = `module-item-${module.toLowerCase().replace(/\s/g, '-')}`;

        // Tạo phần tử <label> cho label của checkbox
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = `module-item-${module.toLowerCase().replace(/\s/g, '-')}`;
        label.textContent = module;

        // Thêm input và label vào div
        div.appendChild(input);
        div.appendChild(label);

        // Thêm div vào phần tử <a>
        moduleLink.appendChild(div);

        // Thêm phần tử <a> vào danh sách module
        document.getElementById('module-list').appendChild(moduleLink);
    });
}

{
    function toggleCheckAll(source) {
        var checkboxes = document.querySelectorAll('.module-checkbox');
        checkboxes.forEach(function(checkbox) {
            if (checkbox !== source) {
                checkbox.checked = source.checked;
            }
        });
      }
}

//Kéo thả modules trong danh sách

{
    $(function() {
        // Kích hoạt tính năng kéo và thả
        $("#module-list").sortable({
            // Chọn các item có thể kéo và thả
            items: ".list-group-item",
            // Cài đặt lại chiều dọc
            axis: "y",
            // Xử lý sự kiện khi hoàn thành kéo và thả
            stop: function(event, ui) {
                // Cập nhật vị trí mới của các item
                updateModuleOrder();
            }
        });

        // Hàm cập nhật vị trí mới của các module
        function updateModuleOrder() {
            var moduleOrder = [];
            // Lặp qua mỗi item và lấy id của nó
            $("#module-list .list-group-item").each(function(index) {
                moduleOrder.push($(this).attr('id'));
            });
            // In ra để kiểm tra
            console.log(moduleOrder);
            // Gửi moduleOrder đến máy chủ hoặc xử lý nó ở đây
        }
    });
}